import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TechnologiesRepository } from './repositories/technologies.repository';

@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesService, PrismaService, TechnologiesRepository],
})
export class TechnologiesModule {}
