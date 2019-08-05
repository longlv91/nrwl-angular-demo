import { Component, OnInit } from '@angular/core';
import { ThemeControlService } from '../../services/theme-control.service';

@Component({
  selector: 'nrwl-workspace-right-settings',
  templateUrl: './right-settings.component.html',
  styleUrls: ['./right-settings.component.css']
})
export class RightSettingsComponent implements OnInit {

  visible: boolean;
  themeSetting: string;
  constructor(private themeService: ThemeControlService) { }

  ngOnInit() {
    this.themeSetting = this.themeService.getCurrentTheme();
  }

  changeTheme() {
    this.themeService.switchTheme(this.themeSetting);
  }

  getCurrentTheme() {
    return this.themeService.getCurrentTheme();
  }

  open(): void {
    this.visible = !this.visible;
  }

  close(): void {
    this.visible = false;
  }

}
