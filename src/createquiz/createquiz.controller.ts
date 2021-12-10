import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatequizService } from './createquiz.service';
import { CreateCareerDTO } from './dto/career.dto';
import { CreateCareersubjectDTO } from './dto/careersubject.dto';
import { CreateQuestionDTO } from './dto/question.dto';

@Controller('create')
export class CreatequizController {
    constructor(
        private readonly createquizService: CreatequizService
    ) { }

    @Get('Level')
    getlevel() {
        return this.createquizService.getlevel();
    }
    @Get('subject')
    getsubject() {
        return this.createquizService.getsubject();
    }
    @Get('career')
    getcareer() {
        return this.createquizService.getcareer();
    }

    @Post('Career')
    addCareer(
        @Body() data: CreateCareerDTO
        
    ) {
        return this.createquizService.career(data)
    }  
    @Post('Subject')
    addSubject(
        @Body() data: CreateCareersubjectDTO
        
    ) {
        return this.createquizService.subject(data)
    }  
    @Post('Qusetion')
    addQusetion(
        @Body() data: CreateQuestionDTO
        
    ) {
        return this.createquizService.Question(data)
    }  
}


