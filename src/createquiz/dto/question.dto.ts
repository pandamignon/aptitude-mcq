import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmpty, IsIdentityCard, IsInt, IsJSON, IsString } from 'class-validator';

export class CreateQuestionDTO {
  
  @ApiProperty()
  @IsInt()
  questionid: string;

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