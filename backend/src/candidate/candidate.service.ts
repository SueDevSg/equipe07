import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidateRepository } from './repositories/candidate.repository';

@Injectable()
export class CandidateService {

  constructor(private readonly candidateRepository: CandidateRepository){}

  create(createCandidateDto: CreateCandidateDto) {
    return this.candidateRepository.create(createCandidateDto);
  }

  findAll() {
    return `This action returns all candidate`;
  }

  findOne(id: number) {
    return this.candidateRepository.findOneById(id)
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
