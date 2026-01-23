import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class CreateInfoDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  company?: string;

  @IsPhoneNumber('CN')
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  description?: string;

}
