import { Controller, Get, Req, Res, HttpStatus, UseGuards, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { UserDTO } from '@nrwl-workspace/entities';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('menus')
  getNavData(@Query('userId') userId: string, @Res() res): any {
    res.status(HttpStatus.OK).json(this.appService.getNavData());
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() userDTO: UserDTO) {
    return this.authService.login(userDTO);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Query('username') username: string) {
    console.log(username);
    return this.authService.getUser(username);
  }
}
