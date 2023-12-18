import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private apiUrl = 'http://localhost:5196/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Define methods for interacting with your API endpoints here

  // Example: Get a list of menu items
  getMenuItems(): Observable<any[]> {
    const url = `${this.apiUrl}/menu-items`;
    return this.http.get<any[]>(url);
  }

  // Example: Create a new menu item
  createMenuItem(menuItemData: any): Observable<any> {
    const url = `${this.apiUrl}/menu-items`;
    return this.http.post<any>(url, menuItemData);
  }

  // Example: Update an existing menu item
  updateMenuItem(menuItemId: number, menuItemData: any): Observable<any> {
    const url = `${this.apiUrl}/menu-items/${menuItemId}`;
    return this.http.put<any>(url, menuItemData);
  }

  // Example: Delete a menu item
  deleteMenuItem(menuItemId: number): Observable<any> {
    const url = `${this.apiUrl}/menu-items/${menuItemId}`;
    return this.http.delete<any>(url);
  }

  // Add more methods as needed for your specific API

  // You can also define custom headers or authentication logic here if needed
}
