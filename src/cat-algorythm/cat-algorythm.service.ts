import { Injectable } from '@nestjs/common';
import { SpecializedService } from 'src/specialized/specialized.service';

@Injectable()
export class CatAlgorythmService {
  constructor(private readonly specializedService: SpecializedService) {}

  public async getCatAlgorythm() {
    // const questionPath: number[] = [];
    // const questionBlock = [];
    // for (let i = 0; i < 5; i++) {
    //   const questionQuery = await this.quizService.getRandomQuizQuestion('medium');
    //   if (!questionPath.includes(questionQuery[0].questionid)) {
    //     questionBlock.push(questionQuery[0]);
    //     questionPath.push(questionQuery[0].questionid);
    //   } else {
    //     i--;
    //   }
    // }
    // console.log(questionBlock);
    // console.log(questionPath);
    // return questionBlock;
  }
}
