import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:5196/api';

  constructor(private http: HttpClient) {}


  getRecipes(): Observable<Recipe[]> {
    const url = `${this.apiUrl}/recipes`;
    return this.http.get<Recipe[]>(url).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  createRecipe(recipeData: any): Observable<any> {
    const url = `${this.apiUrl}/recipes`;
    return this.http.post<any>(url, recipeData).pipe(
      catchError(this.handleError)
    );
  }

  updateRecipe(recipeId: number, recipeData: any): Observable<any> {
    const url = `${this.apiUrl}/recipes/${recipeId}`;
    return this.http.put<any>(url, recipeData).pipe(
      catchError(this.handleError)
    );
  }


  deleteRecipe(recipeId: number): Observable<any> {
    const url = `${this.apiUrl}/recipes/${recipeId}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
