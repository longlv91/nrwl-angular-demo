import { Component, OnInit, Input } from '@angular/core';
import { Menus } from '@nrwl-workspace/entities';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nrwl-workspace-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() isCollapsed: boolean;
  menus: Menus[];

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.dataService.getMenus(this.authService.user.id).subscribe(data => {
      this.menus = data;
    })
  }

}
