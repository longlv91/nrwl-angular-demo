import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { Menus } from '@nrwl-workspace/entities';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('menus')
  getNavData(@Req() req, @Res() res): any {
    res.status(HttpStatus.OK).json(this.appService.getNavData());
  }
}
