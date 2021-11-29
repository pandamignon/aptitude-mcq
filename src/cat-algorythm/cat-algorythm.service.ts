import { Injectable } from '@nestjs/common';
import { SpecializedService } from 'src/specialized/specialized.service'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CatAlgorythmService {
  constructor(
    private readonly specializedService: SpecializedService,
    private readonly prismaService: PrismaService,
  ) {}

  public async takeQuiz() {
    const take = await this.prismaService.take.create({
      data: {
        rank: 0,
        status: 'pending',
        testDate: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Bangkok',
        }),
        userId: 1,
        career_subjectId: '3cf7c206-b9c2-4fa7-b2fc-7da92d0c70c5',
      },
    });
    console.log(take);
    //this.takeM5(take.id,take.level_path);
    return take.id;
  }

  public async specializedAdaptive(takeid: string, score = 0) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    let currentLevel: string;
    if (taking.level_path.length != 0) {
      currentLevel = taking.level_path.slice(-1)[0];
    }

    if (taking.level_path.length == 0) {
      return;
    } else if (taking.level_path.length < 6) {
      // function for select next level
      switch (currentLevel) {
        case 'm5': {
          if (score > 3) {
            //call m4h1
            this.takeM4h1(takeid);
            break;
          } else if (score == 3) {
            //call m5
            this.takeM5(takeid);
            break;
          } else {
            //call m4e1
            break;
          }
        }
        case 'm4h1': {
          if (score > 3) {
            //call m3h2
            break;
          } else if (score == 3) {
            //call m4h1
            this.takeM4h1(takeid);
            break;
          } else {
            //call m5
            this.takeM5(takeid);
            break;
          }
        }
        case 'm3h2': {
          if (score > 3) {
            //call m2h3
            break;
          } else if (score == 3) {
            //call m3h2
            break;
          } else {
            //call m4h1
            this.takeM4h1(takeid);
            break;
          }
        }
        case 'm2h3': {
          if (score > 3) {
            //call m1h4
            break;
          } else if (score == 3) {
            //call m2h3
            break;
          } else {
            //call m3h2
            break;
          }
        }
        case 'm4e1': {
          if (score > 3) {
            //call m5
            this.takeM5(takeid);
            break;
          } else if (score == 3) {
            //call m4e1
            break;
          } else {
            //call m3e2
            break;
          }
        }
        case 'm3e2': {
          if (score > 3) {
            //call m4e1
            break;
          } else if (score == 3) {
            //call m3e2
            break;
          } else {
            //call m2e3
            break;
          }
        }
        case 'm2e3': {
          if (score > 3) {
            //call m3e2
            break;
          } else if (score == 3) {
            //call m2e3
            break;
          } else {
            //call m1e4
            break;
          }
        }
        default: {
          //call m5
          this.takeM5(takeid);
          break;
        }
      }
      return;
    } else {
      //function for generate rank
      return;
    }
  }

  public async takeM5(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m5();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m5'),
        question_medium: question.mediumPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM4h1(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m4h1();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m4h1'),
        question_medium: question.mediumPath,
        question_hard: question.hardPath,
      },
    });
    return { takeid: takeid, question: question };
  }
}
