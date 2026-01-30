import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional } from "class-validator";
export class CreateInfoDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  company?: string;

  @IsOptional()
  @IsMobilePhone('zh-CN',{  })
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  description?: string;

}
