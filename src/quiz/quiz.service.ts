import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prismaService: PrismaService) {}
  easyLevelId = 'e935633a-d55f-48fe-8f43-584923e7f406';
  medeiumLevelId = '15f5f881-2e17-49a6-9f35-6482b18bb58a';
  hardLevelId = '24e1592d-0e4b-4d2a-882a-86abdfce18cb';

  public get() {
    return this.prismaService.career_subject.findMany({
      select: {
        title: true,
        quiz_question: true,
      },
    });
  }

  public async getRandomQuizQuestion(lv: string) {
    let levelId = '';
    if (lv === 'easy') {
      levelId = this.easyLevelId;
    } else if (lv === 'medium') {
      levelId = this.medeiumLevelId;
    } else if (lv === 'hard') {
      levelId = this.hardLevelId;
    }
    const maxQuestion = await this.maxId(levelId);
    //console.log(maxQuestion[0].questionid);
    return this.prismaService.quiz_question.findMany({
      select: {
        questionid: true,
        question: true,
        answer: true,
        correct_answer: true,
        level: true,
      },
      where: {
        AND: [
          {
            levelid: {
              equals: levelId,
            },
          },
          {
            career_subjectId: {
              equals: '3cf7c206-b9c2-4fa7-b2fc-7da92d0c70c5',
            },
          },
        ],
      },
      take: 1,
      skip: Math.floor(Math.random() * maxQuestion[0].questionid),
    });
  }

  public maxId(level: string) {
    const levelId = level;
    return this.prismaService.quiz_question.findMany({
      select: {
        questionid: true,
      },
      where: {
        AND: [
          {
            career_subjectId: {
              equals: '3cf7c206-b9c2-4fa7-b2fc-7da92d0c70c5',
            },
          },
          {
            levelid: {
              equals: levelId,
            },
          },
        ],
      },
      orderBy: {
        questionid: 'desc',
      },
      take: 1,
    });
  }
}
