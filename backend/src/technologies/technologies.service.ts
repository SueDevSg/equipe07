import { Injectable } from '@nestjs/common';
import { CreateTechnologiesDto } from './dto/create-technologies.dto';
import { TechnologiesRepository } from './repositories/technologies.repository';

@Injectable()
export class TechnologiesService {
  constructor(
    private readonly technologiesRepository: TechnologiesRepository,
  ) {}

  async create(createTechnologiesDto: CreateTechnologiesDto) {
    return this.technologiesRepository.create(createTechnologiesDto);
  }

  findAll() {
    return this.technologiesRepository.findAll();
  }

  findOne(id: bigint) {
    return this.technologiesRepository.findOne(id);
  }

  remove(id: bigint) {
    return this.technologiesRepository.remove(id);
  }
}
