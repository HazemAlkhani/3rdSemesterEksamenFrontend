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

  // Creating a new menu item
  createNewItem() {
    const newItemData = {
      // Define your new menu item data here
    };

    this.menuItemService.createMenuItem(newItemData).subscribe((response) => {
      // Handle the response from the service, e.g., display a success message
      console.log('New menu item created:', response);
    });
  }

  // Updating an existing menu item
  updateExistingItem(itemId: number | undefined) {
    // Set the itemId property
    this.itemId = itemId;

    const updatedItemData = {
      // Define your updated menu item data here
    };

    this.menuItemService.updateMenuItem(this.itemId, updatedItemData).subscribe((response) => {
      // Handle the response from the service, e.g., display a success message
      console.log('Menu item updated:', response);
    });
  }

// Example of setting itemId before deleting an item
  deleteItem(itemId: number | undefined) {
    // Set the itemId property
    this.itemId = itemId;

    this.menuItemService.deleteMenuItem(this.itemId).subscribe(() => {
      // Handle the deletion, e.g., remove the item from the UI
      console.log('Menu item deleted');
    });
  }
}
