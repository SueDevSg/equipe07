import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get('/by-id/:id')
  findOneById(@Param('id') id: string) {
    if (isNaN(+id)) {
      throw new RangeError('The id is not a valid number');
    }
    return this.candidateService.findOneById(+id);
  }

  @Get('/by-email')
  findOneByEmail(@Query('email') email: string) {
    return this.candidateService.findOneByEmail(email);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(+id);
  }
}
