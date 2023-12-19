import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private apiUrl = 'http://localhost:5196/api';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  // Creating a new menu item
  createMenuItem(newItemData: any): Observable<any> {
    const url = `${this.apiUrl}/menu-items`;
    return this.http.post<any>(url, newItemData);
  }

  // Updating an existing menu item
  updateMenuItem(menuItemId: number | undefined, updatedItemData: any): Observable<any> {
    const url = `${this.apiUrl}/menu-items/${menuItemId}`;
    return this.http.put<any>(url, updatedItemData);
  }

  // Deleting a menu item
  deleteMenuItem(menuItemId: number | undefined): Observable<any> {
    const url = `${this.apiUrl}/menu-items/${menuItemId}`;
    return this.http.delete<any>(url);
  }
}
