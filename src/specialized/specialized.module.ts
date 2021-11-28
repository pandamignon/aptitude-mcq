import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { QuizModule } from 'src/quiz/quiz.module';
import { SpecializedController } from './specialized.controller';
import { SpecializedService } from './specialized.service';

@Module({
  imports: [PrismaModule, QuizModule],
  controllers: [SpecializedController],
  providers: [SpecializedService],
  exports: [SpecializedService]
})
export class SpecializedModule {}
