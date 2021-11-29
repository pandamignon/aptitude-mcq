import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
import { AddUserDTO } from './dto/adduser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }

  @Post('add')
  add(@Body() data: AddUserDTO) {
    return this.usersService.add(data);
  }
}
