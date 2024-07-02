import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { CandidateEntity } from "../entities/candidate.entity";

@Injectable()
export class CandidateRepository {
    constructor(private readonly prisma: PrismaService){}

    async create(createCandidateDto: CreateCandidateDto): Promise<CandidateEntity>{
        return await this.prisma.candidate.create({
            data: {
                name:createCandidateDto.name,
                email:createCandidateDto.email,
                phone:createCandidateDto.phone,
                isSignIn:false
            }
        })
    }

    async findOneById(id: number): Promise<CandidateEntity>{
        return await this.prisma.candidate.findUnique({
            where: {
                id
            }
        })
    }
}