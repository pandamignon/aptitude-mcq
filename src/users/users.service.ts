import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsersService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async create(
        email: string,
        password: string,
        name: string
    ) {
        const newUser = await this.prismaService.user.create({
            data: {
                email, password, name
            }
        })
        console.log(newUser);
        return newUser
    }
}
