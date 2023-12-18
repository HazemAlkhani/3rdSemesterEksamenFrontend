import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private apiUrl = 'http://localhost:5196/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Define methods for interacting with your API endpoints here

  // Example: Get a list of ingredients
  getIngredients(): Observable<any[]> {
    const url = `${this.apiUrl}/ingredients`;
    return this.http.get<any[]>(url);
  }

  // Example: Create a new ingredient
  createIngredient(ingredientData: any): Observable<any> {
    const url = `${this.apiUrl}/ingredients`;
    return this.http.post<any>(url, ingredientData);
  }

  // Example: Update an existing ingredient
  updateIngredient(ingredientId: number, ingredientData: any): Observable<any> {
    const url = `${this.apiUrl}/ingredients/${ingredientId}`;
    return this.http.put<any>(url, ingredientData);
  }

  // Example: Delete an ingredient
  deleteIngredient(ingredientId: number): Observable<any> {
    const url = `${this.apiUrl}/ingredients/${ingredientId}`;
    return this.http.delete<any>(url);
  }

  // Add more methods as needed for your specific API

  // You can also define custom headers or authentication logic here if needed
}
