import { $Enums } from "@prisma/client";

export class ResponseCandidateDto {
    name: string;
    email: string;
    phone: string;
    contributionType: $Enums.Contribution
}