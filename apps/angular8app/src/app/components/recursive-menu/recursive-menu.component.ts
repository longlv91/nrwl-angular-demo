import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '@nrwl-workspace/entities';

@Component({
  selector: 'nrwl-workspace-recursive-menu',
  templateUrl: './recursive-menu.component.html',
  styleUrls: ['./recursive-menu.component.css']
})
export class RecursiveMenuComponent implements OnInit {

  @Input() menus: Menu[];
  constructor() { }

  ngOnInit() {
  }

}
