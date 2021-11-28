import { Controller, Get } from '@nestjs/common';
import { CatAlgorythmService } from './cat-algorythm.service';

@Controller('cat-algorythm')
export class CatAlgorythmController {
  constructor(private readonly catAlgorythmService: CatAlgorythmService) {}
  @Get()
  getCatAlgorythm() {
    return this.catAlgorythmService.getCatAlgorythm();
  }
}
