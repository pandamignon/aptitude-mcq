import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prismaService: PrismaService) {}

  public get() {
    return this.prismaService.quiz.findMany({
      select: {
        tital: true,
        quiz_question: true,
      },
    });
  }
}
