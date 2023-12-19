import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../models/menu-item.model';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItems: MenuItem[] = [];
  errorMessage: string = '';

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.menuItemService.getMenuItems().subscribe({
      next: (data) => this.menuItems = data,
      error: (err) => this.errorMessage = err.message
    });
  }
}
