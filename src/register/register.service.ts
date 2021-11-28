import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDTO } from './dto/Register.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UsersService) {}
  public async register(registrationData: RegisterDTO) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const CreateUserDTO = await this.userService.create({
        ...registrationData,
        password: hashedPassword,
      });
      CreateUserDTO.password = undefined;
      return CreateUserDTO;
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
