import { Module } from '@nestjs/common';
import { CandidateModule } from './candidate/candidate.module';
import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [CandidateModule, TechnologiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
