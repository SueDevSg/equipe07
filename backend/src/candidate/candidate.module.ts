import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CandidateRepository } from './repositories/candidate.repository';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService, CandidateRepository],
})
export class CandidateModule {}
