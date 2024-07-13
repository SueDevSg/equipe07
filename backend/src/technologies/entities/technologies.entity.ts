import { Technologies } from '@prisma/client';

export class TechnologiesEntity implements Technologies {
  id: bigint;
  candidateId: bigint;
  name: string;
}
