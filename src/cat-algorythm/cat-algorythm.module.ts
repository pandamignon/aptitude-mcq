import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CatAlgorythmController } from './cat-algorythm.controller';
import { CatAlgorythmService } from './cat-algorythm.service';
import { SpecializedModule } from 'src/specialized/specialized.module';

@Module({
  imports: [PrismaModule, SpecializedModule],
  controllers: [CatAlgorythmController],
  providers: [CatAlgorythmService]
})
export class CatAlgorythmModule {}
