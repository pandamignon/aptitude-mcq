import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmpty, IsIdentityCard, IsJSON, IsString } from 'class-validator';

export class CreateQuestionDTO {
  
  @ApiProperty()
  @IsString()
  career_subjectId: string;
  
  @ApiProperty()
  @IsString()
  levelid: string;

  @ApiProperty()
  @IsString()
  question: string;

  @ApiProperty()
  @IsArray()
  answer: string[];

  @ApiProperty()
  @IsString()
  correct_answer: string;

}