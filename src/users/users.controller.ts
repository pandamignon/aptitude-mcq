import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    create(
        @Body() data: CreateUserDTO
    ) {
        return this.usersService.create(data)
    }
}
 