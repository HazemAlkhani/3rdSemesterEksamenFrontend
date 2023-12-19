import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private apiUrl = 'http://localhost:5196/api';

  constructor(private http: HttpClient) {}


  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
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

}
