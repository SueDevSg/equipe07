import { IsInt, IsString } from 'class-validator';

export class CreateTechnologiesDto {
  @IsString()
  name: string;
  @IsInt()
  candidateId: bigint;
  @IsString()
  level: string;
}
