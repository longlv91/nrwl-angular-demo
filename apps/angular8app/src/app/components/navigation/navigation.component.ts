import { Component, OnInit, Input } from '@angular/core';
import { Menus } from '@nrwl-workspace/entities';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'nrwl-workspace-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() isCollapsed: boolean;
  menus: Menus[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenus().subscribe(data => {
      this.menus = data;
    })
  }

}
