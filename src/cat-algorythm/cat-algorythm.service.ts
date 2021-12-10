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
    let question;
    if (taking.level_path.length == 0) {
      question = await this.takeM5(takeid);
      //console.log(question);
      return { takeid: takeid, question: question };
    } else if (taking.level_path.length < 6) {
      // function for select next level
      switch (currentLevel) {
        case 'm5': {
          if (score > 3) {
            //call m4h1
            question = await this.takeM4h1(takeid);
            break;
          } else if (score == 3) {
            //call m5
            question = await this.takeM5(takeid);
            break;
          } else {
            //call m4e1
            question = await this.takeM4h1(takeid)
            break;
          }
        }
        case 'm4h1': {
          if (score > 3) {
            //call m3h2
            question = await this.takeM3h2(takeid)
            break;
          } else if (score == 3) {
            //call m4h1
            question = await this.takeM4h1(takeid);
            break;
          } else {
            //call m5
            question = await this.takeM5(takeid);
            break;
          }
        }
        case 'm3h2': {
          if (score > 3) {
            //call m2h3
            question = await this.takeM2h3(takeid)
            break;
          } else if (score == 3) {
            //call m3h2
            question = await this.takeM3h2(takeid)
            break;
          } else {
            //call m4h1
            question = await this.takeM4h1(takeid);
            break;
          }
        }
        case 'm2h3': {
          if (score > 3) {
            //call m1h4
            question = await this.takeM1h4(takeid);
            break;
          } else if (score == 3) {
            //call m2h3
            question = await this.takeM2h3(takeid);
            break;
          } else {
            //call m3h2
            question = await this.takeM3h2(takeid);
            break;
          }
        }
        case 'm4e1': {
          if (score > 3) {
            //call m5
            question = await this.takeM5(takeid);
            break;
          } else if (score == 3) {
            //call m4e1
            question = await this.takeM4e1(takeid);
            break;
          } else {
            //call m3e2
            question = await this.takeM3e2(takeid);
            break;
          }
        }
        case 'm3e2': {
          if (score > 3) {
            //call m4e1
            question = await this.takeM4e1(takeid);
            break;
          } else if (score == 3) {
            //call m3e2
            question = await this.takeM3e2(takeid);
            break;
          } else {
            //call m2e3
            question = await this.takeM2e3(takeid);
            break;
          }
        }
        case 'm2e3': {
          if (score > 3) {
            //call m3e2
            question = await this.takeM3e2(takeid);
            break;
          } else if (score == 3) {
            //call m2e3
            question = await this.takeM2e3(takeid);
            break;
          } else {
            //call m1e4
            question = await this.takeM1e4(takeid);
            break;
          }
        }
        default: {
          //call m5
          question = await this.takeM5(takeid);
          break;
        }
      }
      return { takeid: takeid, question: question };
    } else {
      //function for generate rank
      const rank = await this.getRank(takeid, score);
      return rank;
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
  public async takeM3h2(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m3h2();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m3h2'),
        question_medium: question.mediumPath,
        question_hard: question.hardPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM2h3(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m2h3();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m2h3'),
        question_medium: question.mediumPath,
        question_hard: question.hardPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM1h4(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m1h4();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m1h4'),
        question_medium: question.mediumPath,
        question_hard: question.hardPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM4e1(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m4e1();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m4e1'),
        question_medium: question.mediumPath,
        question_easy: question.easyPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM3e2(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m3e2();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m3e2'),
        question_medium: question.mediumPath,
        question_easy: question.easyPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM2e3(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m2e3();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m2e3'),
        question_medium: question.mediumPath,
        question_easy: question.easyPath,
      },
    });
    return { takeid: takeid, question: question };
  }
  public async takeM1e4(takeid: string) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    const question = await this.specializedService.m1e4();
    await this.prismaService.take.update({
      where: {
        id: takeid,
      },
      data: {
        level_path: taking.level_path.concat('m1e4'),
        question_medium: question.mediumPath,
        question_easy: question.easyPath,
      },
    });
    return { takeid: takeid, question: question };
  }

  public async getRank(takeid: string, score: number) {
    const taking = await this.prismaService.take.findUnique({
      where: {
        id: takeid,
      },
    });
    let currentLevel: string = taking.level_path.slice(-1)[0];;
    let rank:string = '';
    switch (currentLevel) {
      case 'm5': {
        if(score >= 4) {
          return rank = "5th rank";
        }else if(score == 3) {
          return rank = "6th rank";
        }else{
          return rank = "7th rank";
        }
        break;
      }
      case 'm4h1': {
        if(score >= 4) {
          return rank = "4th rank";
        }else if(score == 3) {
          return rank = "5th rank";
        }else{
          return rank = "6th rank";
        }
      }
      case 'm3h2': {
        if(score >= 4) {
          return rank = "3th rank";
        }else if(score == 3) {
          return rank = "4th rank";
        }else{
          return rank = "5th rank";
        }
        break;
      }
      case 'm2h3': {
        if(score >= 4) {
          return rank = "2nd rank";
        }else if(score == 3) {
          return rank = "3rd rank";
        }else{
          return rank = "4th rank";
        }
      }
      case 'm1h4': {
        if(score >= 4) {
          return rank = "1st rank";
        }else if(score == 3) {
          return rank = "2nd rank";
        }else{
          return rank = "3rd rank";
        }
      }
      case 'm4e1': {
        if(score >= 4) {
          return rank = "6th rank";
        }else if(score == 3) {
          return rank = "7th rank";
        }else{
          return rank = "8th rank";
        }
      }
      case 'm3e2': {
        if(score >= 4) {
          return rank = "7th rank";
        }else if(score == 3) {
          return rank = "8th rank";
        }else{
          return rank = "9th rank";
        }
      }
      case 'm2e3': {
        if(score >= 4) {
          return rank = "8th rank";
        }else if(score == 3) {
          return rank = "9th rank";
        }else{
          return rank = "10th rank";
        }
      }
      case 'm1e4': {
        if(score >= 4) {
          return rank = "9th rank";
        }else if(score == 3) {
          return rank = "10th rank";
        }else{
          return rank = "11th rank";
        }
      }
      default: {
        return rank = "No rank";
      }
}