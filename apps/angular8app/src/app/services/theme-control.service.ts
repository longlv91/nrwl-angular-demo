import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeControlService {

  public static DARK_THEME = 'dark-theme';
  public static LIGHT_THEME = 'light-theme';
  public static GRAY_THEME = 'gray-theme';

  private currentTheme: string;

  constructor() {
    this.currentTheme = ThemeControlService.DARK_THEME;
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
