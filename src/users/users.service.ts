import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from './dto/user.dto';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDTO): Promise<any> {
    const newUser = await this.prismaService.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
    console.log(newUser);
    return newUser;
  }
}
