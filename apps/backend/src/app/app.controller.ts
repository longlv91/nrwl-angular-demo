import { Controller, Get, Req, Res, HttpStatus, UseGuards, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { UserDTO } from '@nrwl-workspace/entities';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ChartService } from './modules/chart/chart.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService, private readonly chartService: ChartService) { }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('menus')
  getNavData(@Query('userId') userId: string): any {
    return this.authService.getNavDataByUserId(userId);
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
    return this.authService.getUser(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('check-token')
  checkToken(@Res() res): any {
    res.status(HttpStatus.OK).json({ message: "Valid token" });
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('analytics-data')
  getAnalyticsChartData(): any {
    return this.chartService.getAnalyticsData();
  }
}
