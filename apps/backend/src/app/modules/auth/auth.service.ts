import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AES, enc } from 'crypto-js';
import { environment } from '../../../environments/environment';

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
    return user;
  }

  async login(user: any) {
    user = await this.usersService.findOne(user.username);
    const payload = { username: user.username, sub: user.id };
    const password = user.password;
    user.password = AES.encrypt(password, environment.secret_key).toString();
    return {
      userInfo: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
