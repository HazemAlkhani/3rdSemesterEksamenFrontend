import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    // Use menuItemService to fetch menu items and update the menuItems array.
    this.menuItemService.getMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }
}
