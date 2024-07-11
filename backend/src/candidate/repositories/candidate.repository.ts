import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { ResponseCandidateDto } from "../dto/response-getCandidate.dto";
import { $Enums } from "@prisma/client";

@Injectable()
export class CandidateRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<ResponseCandidateDto> {
    const createdCandidate = await this.prisma.candidate.create({
      data: {
        name: createCandidateDto.name,
        email: createCandidateDto.email,
        phone: createCandidateDto.phone,
        contributionType: createCandidateDto.contributionType,
        isSignIn: false
      }
    });

    return {
      ...createdCandidate,
    };
  }

  async findOneById(id: number): Promise<ResponseCandidateDto | null> {
    if (isNaN(id)) {
      throw new RangeError('The id is not a valid number');
    }

    const candidate = await this.prisma.candidate.findUnique({
      where: {
        id: BigInt(id),
      },
    });
    if (!candidate) { return null; }
    return {
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      contributionType: candidate.contributionType
    };
  }

  async findOneByEmail(email: string): Promise<ResponseCandidateDto | null> {
    const candidate = await this.prisma.candidate.findUnique({
      where: {
        email: email
      }
    });
    if (!candidate) { return null; }
    return {
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      contributionType: candidate.contributionType
    };
  }
}
