import { Module } from '@nestjs/common';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [CandidateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
