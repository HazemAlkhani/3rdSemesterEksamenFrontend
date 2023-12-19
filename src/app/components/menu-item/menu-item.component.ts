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
  itemId: number | undefined;

  constructor(private menuItemService: MenuItemService) {
  }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.menuItemService.getMenuItems().subscribe({
      next: (data) => this.menuItems = data,
      error: (err) => this.errorMessage = err.message
    });
  }


  createNewItem() {
    const newItemData = {
    };

    this.menuItemService.createMenuItem(newItemData).subscribe((response) => {

      console.log('New menu item created:', response);
    });
  }

  updateExistingItem(itemId: number | undefined) {
    this.itemId = itemId;

    const updatedItemData = {

    };

    this.menuItemService.updateMenuItem(this.itemId, updatedItemData).subscribe((response) => {
      console.log('Menu item updated:', response);
    });
  }


  deleteItem(itemId: number | undefined) {
    this.itemId = itemId;

    this.menuItemService.deleteMenuItem(this.itemId).subscribe(() => {
      console.log('Menu item deleted');
    });
  }
}
