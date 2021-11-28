import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module'
import { UsersModule } from './users/users.module';
import { QuizModule } from './quiz/quiz.module';
import { CatAlgorythmModule } from './cat-algorythm/cat-algorythm.module';
import { SpecializedModule } from './specialized/specialized.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    QuizModule,
    CatAlgorythmModule,
    SpecializedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
