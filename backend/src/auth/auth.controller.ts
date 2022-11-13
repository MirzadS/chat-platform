import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { IUserService } from 'src/users/user';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserLogginDto } from './dtos/UserLogin.dto';
import { LocalAuthGuard } from './utils/Guards';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private usersService: IUserService,
  ) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return instanceToPlain(await this.usersService.createUser(createUserDto));
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login() {}

  // @Get('status')
  // status() {}

  // @Post('logout')
  // logout() {}
}
