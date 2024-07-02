import { Candidate } from "@prisma/client";

export class CandidateEntity implements Candidate{
  id: bigint;
  name: string;
  email: string;
  phone: string;
  isSignIn: boolean;
  createdAt: Date; 
}
