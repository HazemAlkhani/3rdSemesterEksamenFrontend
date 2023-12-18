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

  // Get a list of recipes
  getRecipes(): Observable<Recipe[]> {
    const url = `${this.apiUrl}/recipes`;
    return this.http.get<Recipe[]>(url).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Create a new recipe
  createRecipe(recipeData: any): Observable<any> {
    const url = `${this.apiUrl}/recipes`;
    return this.http.post<any>(url, recipeData).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Update an existing recipe
  updateRecipe(recipeId: number, recipeData: any): Observable<any> {
    const url = `${this.apiUrl}/recipes/${recipeId}`;
    return this.http.put<any>(url, recipeData).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Delete a recipe
  deleteRecipe(recipeId: number): Observable<any> {
    const url = `${this.apiUrl}/recipes/${recipeId}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Add more methods as needed for your specific API

  // You can also define custom headers or authentication logic here if needed

  private handleError(error: HttpErrorResponse) {
    // Handle errors here, e.g., log the error, show a user-friendly message, etc.
    console.error('API Error:', error);
    return throwError('Something went wrong. Please try again later.'); // Return a user-friendly error message
  }
}
