import { PrismaClient } from '@prisma/client';

import * as career_subject_data from './career_subject.json';
import * as career_data from './career.json';
import * as level_data from './level.json';
import * as quiz_question_data from './quiz_question.json';

const prisma = new PrismaClient();
let skipDuplicates = true;
async function main() {
  const career_subject = await prisma.career_subject.createMany({
    data: career_subject_data['career_subject'],
    skipDuplicates,
  });
  const career = await prisma.career.createMany({
    data: career_data['career'],
    skipDuplicates,
  });
  const level = await prisma.level.createMany({
    data: level_data['level'],
    skipDuplicates,
  });
  const quiz_question = await prisma.quiz_question.createMany({
    data: quiz_question_data['quiz_question'],
    skipDuplicates,
  });
  console.log({
    career_subject,
    career,
    level,
    quiz_question,
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
