import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nrwl-workspace-right-settings',
  templateUrl: './right-settings.component.html',
  styleUrls: ['./right-settings.component.css']
})
export class RightSettingsComponent implements OnInit {

  visible: boolean;
  constructor() { }

  ngOnInit() {
  }

  
  open(): void {
    this.visible = !this.visible;
  }

  close(): void {
    this.visible = false;
  }

}
