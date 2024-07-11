import { $Enums, Candidate } from "@prisma/client";

export class CandidateEntity implements Candidate{
  id: bigint;
  name: string;
  email: string;
  phone: string;
  isSignIn: boolean;
  contributionType: $Enums.Contribution;
  createdAt: Date; 
}
