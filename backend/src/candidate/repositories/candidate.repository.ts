import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { ResponseCandidateDto } from "../dto/response-getCandidate.dto";

@Injectable()
export class CandidateRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<ResponseCandidateDto> {
    const createdCandidate = await this.prisma.candidate.create({
      data: {
        name: createCandidateDto.name,
        email: createCandidateDto.email,
        phone: createCandidateDto.phone,
        isSignIn: false
      }
    });

    return {
      ...createdCandidate,
    };
  }

  async findOneById(id: number): Promise<ResponseCandidateDto | null> {
    console.log(`findOneById called with id: ${id}`);
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
    };
  }

  async findOneByEmail(email: string): Promise<ResponseCandidateDto | null> {
    console.log(`findOneByEmail called with email: ${email}`);
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
    };
  }
}
