import { $Enums } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

export class CreateCandidateDto {
    @IsString()
    @IsNotEmpty()
    @Length(3,255)
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNumberString()
    @IsNotEmpty()
    @Length(11,11)
    phone: string;
    @IsEnum($Enums.Contribution)
    contributionType: $Enums.Contribution
}
