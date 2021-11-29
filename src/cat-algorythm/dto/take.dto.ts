import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, IsDate, IsArray } from 'class-validator';

export class AddTakeDTO {
  @ApiProperty()
  @IsInt()
  rank: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  testDate: string;

  @ApiProperty()
  @IsArray()
  question_medium: number[];

  @ApiProperty()
  @IsArray()
  question_hard: number[];

  @ApiProperty()
  @IsArray()
  question_easy: number[];

  @ApiProperty()
  @IsArray()
  level_path: string[];

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  career_subjectId: string;
}
