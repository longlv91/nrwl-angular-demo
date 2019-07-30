import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getUser(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
