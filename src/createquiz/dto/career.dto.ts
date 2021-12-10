import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmpty, IsString } from 'class-validator';

export class CreateCareerDTO {
 
  @ApiProperty()
  @IsString()
  name: string;
}