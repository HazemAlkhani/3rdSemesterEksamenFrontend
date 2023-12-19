import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientModel } from '../models/Ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private apiUrl = 'http://localhost:5196/api';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<IngredientModel[]> {
    const url = `${this.apiUrl}/ingredients`;
    return this.http.get<IngredientModel[]>(url);
  }

  createIngredient(ingredientData: any): Observable<IngredientModel> {
    const url = `${this.apiUrl}/ingredients`;
    return this.http.post<IngredientModel>(url, ingredientData);
  }

  updateIngredient(ingredientId: number, ingredientData: any): Observable<IngredientModel> {
    const url = `${this.apiUrl}/ingredients/${ingredientId}`;
    return this.http.put<IngredientModel>(url, ingredientData);
  }

  deleteIngredient(ingredientId: number): Observable<void> {
    const url = `${this.apiUrl}/ingredients/${ingredientId}`;
    return this.http.delete<void>(url);
  }
}
