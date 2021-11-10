import { Controller, Get, Post, Delete } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    create() {
        return this.usersService.create(
            "tetravaal.system@gmail.con",
            "password",
            "kumpon sotsukpiam"
        )
    }
}
