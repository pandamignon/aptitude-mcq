import { Controller, Get, Param } from '@nestjs/common';
import { CatAlgorythmService } from './cat-algorythm.service';

@Controller('cat-algorythm')
export class CatAlgorythmController {
  constructor(private readonly catAlgorythmService: CatAlgorythmService) {}
  @Get('/take')
  takeQuiz() {
    return this.catAlgorythmService.takeQuiz();
  }

  @Get('/take/:id/:score')
  specializedAdaptive(@Param('id') id: string, @Param('score') score: number) {
    return this.catAlgorythmService.specializedAdaptive(id, score);
  }

}
