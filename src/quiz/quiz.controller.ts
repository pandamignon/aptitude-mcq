import { Controller, Get, Param } from '@nestjs/common';

import { QuizService } from '../quiz/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get()
  create() {
    return this.quizService.get();
  }

  @Get('/random/:level')
  getRandomQuiz(@Param('level') level: string) {
    return this.quizService.getRandomQuizQuestion(level);
  }
}
