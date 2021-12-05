import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCareerDTO } from './dto/career.dto';

import { CreateQuestionDTO } from './dto/question.dto';
import { CreateCareersubjectDTO } from './dto/careersubject.dto';


@Injectable()
export class CreatequizService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }
    // #Get career
    public getcareer() {
    return this.prismaService.career.findMany({
      select: {
        name: true,
    
      },
    });
}
    // #Get Level
    public getlevel() {
        return this.prismaService.level.findMany({
          select: {
            title: true,
            
          },
        });
}
    // #Get subject
    public getsubject() {
        return this.prismaService.career_subject.findMany({
          select: {
            title: true,
        
          },
        });
}
    // #Career
    async career(data: CreateCareerDTO): Promise <any> {
        const newCareer = await this.prismaService.career.create({
            data: {
                name: data.name
            }
        })
        console.log(newCareer)
        return newCareer
    }
    // #Careersubject
     async subject(data: CreateCareersubjectDTO): Promise <any> {
        const newCareersubject = await this.prismaService.career_subject.create({
            data: {
                title: data.title,
                careerid: data.careerid
            }
        })
    
        console.log(newCareersubject)
        return newCareersubject
    }
    // #Qusetion
     async Question(data: CreateQuestionDTO): Promise <any> {
        const newQusetion = await this.prismaService.quiz_question.create({
            data: { 
                questionid: data.questionid,
                career_subjectId: data.career_subjectId, 
                levelid: data.levelid,
                question: data.question,
                answer: data.answer,
                correct_answer: data.correct_answer
            }
        })
        console.log(newQusetion)
        return newQusetion
   }      
}