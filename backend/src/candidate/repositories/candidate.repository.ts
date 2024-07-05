import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { CandidateEntity } from "../entities/candidate.entity";
import { ResponseCandidateDto } from "../dto/response-getCandidate.dto";

@Injectable()
export class CandidateRepository {
    constructor(private readonly prisma: PrismaService){}

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
            id: createdCandidate.id.toString(),
        };
    }

    async findOneById(id: number): Promise<ResponseCandidateDto | null>{
        const candidate = await this.prisma.candidate.findUnique({
            where: {
                id: BigInt(id),
            },
        });
        if (!candidate) {
            return null;
        }
        return {
            id: candidate.id.toString(),
            name: candidate.name,
            email: candidate.email,
            phone: candidate.phone,
        };

    }
}