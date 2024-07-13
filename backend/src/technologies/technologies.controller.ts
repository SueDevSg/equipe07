/* eslint-disable */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologiesDto } from './dto/create-technologies.dto';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Post()
  create(@Body() createTechnologiesDto: CreateTechnologiesDto) {
    return this.technologiesService.create(createTechnologiesDto);
  }

  @Get()
  findAll() {
    return this.technologiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: bigint) {
    return this.technologiesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: bigint) {
    return this.technologiesService.remove(id);
  }
}
