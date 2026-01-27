import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoDto } from './create-info.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateInfoDto extends PartialType(CreateInfoDto) {

    @IsOptional()
    @IsBoolean()
    contact?: boolean;

    @IsOptional()
    @IsString()
    remark?: string;
}
