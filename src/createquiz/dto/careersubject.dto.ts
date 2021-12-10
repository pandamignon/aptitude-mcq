import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmpty, IsIdentityCard, IsString } from 'class-validator';

export class CreateCareersubjectDTO {
 
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  careerid: string;


}