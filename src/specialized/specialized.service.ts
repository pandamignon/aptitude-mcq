import { Injectable } from '@nestjs/common';
import { QuizService } from '../quiz/quiz.service';

@Injectable()
export class SpecializedService {
  constructor(private readonly quizService: QuizService) {}
  easy = 'easy';
  medium = 'medium';
  hard = 'hard';

  public async m5() {
    const questionMediumPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 5; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    return { questionresult: questionBlock, mediumPath: questionMediumPath };
  }
  public async m4h1() {
    const questionMediumPath: number[] = [];
    const questionHardPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 4; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    const questionQuery = await this.quizService.getRandomQuizQuestion(
      this.hard,
    );
    questionBlock.push(questionQuery[0]);
    questionHardPath.push(questionQuery[0].questionid);
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionHardPath);
    return { 
      questionresult: questionBlock, 
      mediumPath: questionMediumPath,
      hardPath: questionHardPath };
  }
  public async m3h2() {
    const questionMediumPath: number[] = [];
    const questionHardPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 3; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 2; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.hard,
      );
      if (!questionHardPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionHardPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionHardPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      hardPath: questionHardPath,
    };
  }
  public async m2h3() {
    const questionMediumPath: number[] = [];
    const questionHardPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 2; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 3; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.hard,
      );
      if (!questionHardPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionHardPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionHardPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      hardPath: questionHardPath,
    };
  }
  public async m1h4() {
    const questionMediumPath: number[] = [];
    const questionHardPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 1; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 4; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.hard,
      );
      if (!questionHardPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionHardPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionHardPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      hardPath: questionHardPath,
    };
  }
  public async m4e1() {
    const questionMediumPath: number[] = [];
    const questionEasyPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 4; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 1; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.easy,
      );
      if (!questionEasyPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionEasyPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionEasyPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      easyPath: questionEasyPath,
    };
  }
  public async m3e2() {
    const questionMediumPath: number[] = [];
    const questionEasyPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 3; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 2; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.easy,
      );
      if (!questionEasyPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionEasyPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionEasyPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      easyPath: questionEasyPath,
    };
  }
  public async m2e3() {
    const questionMediumPath: number[] = [];
    const questionEasyPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 2; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 3; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.easy,
      );
      if (!questionEasyPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionEasyPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionEasyPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      easyPath: questionEasyPath,
    };
  }
  public async m1e4() {
    const questionMediumPath: number[] = [];
    const questionEasyPath: number[] = [];
    const questionBlock = [];
    for (let i = 0; i < 4; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.medium,
      );
      if (!questionMediumPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionMediumPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 1; i++) {
      const questionQuery = await this.quizService.getRandomQuizQuestion(
        this.easy,
      );
      if (!questionEasyPath.includes(questionQuery[0].questionid)) {
        questionBlock.push(questionQuery[0]);
        questionEasyPath.push(questionQuery[0].questionid);
      } else {
        i--;
      }
    }
    console.log(questionBlock);
    console.log(questionMediumPath);
    console.log(questionEasyPath);
    return {
      questionresult: questionBlock,
      mediumPath: questionMediumPath,
      easyPath: questionEasyPath,
    };
  }
}
