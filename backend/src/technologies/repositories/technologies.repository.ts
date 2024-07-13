import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTechnologiesDto } from '../dto/create-technologies.dto';
import { ResponseTechnologiesDto } from '../dto/response.getTechnologies.dto';
/* eslint-disable */
@Injectable()
export class TechnologiesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTechnologiesDto: CreateTechnologiesDto,
  ): Promise<ResponseTechnologiesDto> {
    return this.prisma.technologies.create({
      data: {
        name: createTechnologiesDto.name,
        candidate: {
          connect: {
            id: createTechnologiesDto.candidateId,
          },
        },
        level: {
          create: { level: createTechnologiesDto.level },
        },
      },
    });
  }

  async findAll(): Promise<ResponseTechnologiesDto[]> {
    const technolgies = await this.prisma.technologies.findMany({
      include: {
        candidate: true,
        level: true,
      },
    });

    return technolgies.map((technology) => {
      return new ResponseTechnologiesDto(technology.name);
    });
  }
  async findOne(id: bigint): Promise<ResponseTechnologiesDto> {
    const technology = await this.prisma.technologies.findUnique({
      where: { id },
      include: {
        candidate: true,
        level: true,
      },
    });
    if (!technology) {
      throw new Error(`Technology with id ${id} not found.`);
    }
    return new ResponseTechnologiesDto(technology.name);
  }
  async remove(id: bigint) {
    return this.prisma.technologies.delete({
        where: { id},
    })
  }
}
