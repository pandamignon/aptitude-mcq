import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreatequizController } from './createquiz.controller';
import { CreatequizService } from './createquiz.service';

@Module({
  imports: [PrismaModule],
  providers: [CreatequizService],
  controllers: [CreatequizController]
})
export class CreatequizModule {}
