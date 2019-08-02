import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AES, enc } from 'crypto-js';
import { environment } from '../../../environments/environment';
import { Menus, Role, Menu } from '@nrwl-workspace/entities';
import { navData } from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const bytes  = AES.decrypt(pass, environment.secret_key);
    pass = bytes.toString(enc.Utf8);
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getUser(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const clonedUser = Object.assign({}, user);
    clonedUser.password = AES.encrypt(clonedUser.password, environment.secret_key).toString();
    return clonedUser;
  }

  async login(user: any) {
    user = await this.usersService.findOne(user.username);
    const payload = { username: user.username, sub: user.id };
    const clonedUser = Object.assign({}, user);
    clonedUser.password = AES.encrypt(clonedUser.password, environment.secret_key).toString();
    return {
      userInfo: clonedUser,
      access_token: this.jwtService.sign(payload),
    };
  }

  async getNavDataByUserId(userId: string): Promise<Menus[]> {
    const user = await this.usersService.findOneById(userId);
    const clonedNav = JSON.parse(JSON.stringify(navData));
    return clonedNav.map(nav => {
      nav.menu = this.getNavByRole(nav.menu, user.role);
      return nav;
    });
  }

  getNavByRole(navChildren: Menu[], role: any) {
    return navChildren.filter(navItem => {
      if (navItem.hasChild) {
        navItem.children = this.getNavByRole(navItem.children, role);
      }
      return navItem.permissions.includes(role);
    })
  }
}
