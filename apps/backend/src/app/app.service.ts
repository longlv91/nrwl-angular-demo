import { Injectable } from '@nestjs/common';
import { navData } from '../assets/data';
import { Menus } from '@nrwl-workspace/entities';

@Injectable()
export class AppService {
  
  getNavData(userId: string): Menus[] {
    return navData;
  }

  
}
