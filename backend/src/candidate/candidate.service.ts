import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidateRepository } from './repositories/candidate.repository';

@Injectable()
export class CandidateService {

  constructor(private readonly candidateRepository: CandidateRepository){}

  async create(createCandidateDto: CreateCandidateDto) {
    const candidate = await this.candidateRepository.create(createCandidateDto);
    return this.convertBigIntToString(candidate);
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

  private convertBigIntToString(candidate: any) {
    if (candidate && candidate.id && typeof candidate.id === 'bigint') {
      candidate.id = candidate.id.toString();
    }
    return candidate;
  }
}
