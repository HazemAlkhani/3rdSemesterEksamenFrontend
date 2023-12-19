import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  errorMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Error fetching recipes', error);
        this.errorMessage = 'Error fetching recipes';
      }
    );
  }

  createNewRecipe() {
    const newRecipeData = {
      name: 'New Recipe',
    };

    this.recipeService.createRecipe(newRecipeData).subscribe(
      (response: Recipe) => {
        console.log('New recipe created:', response);
        this.loadRecipes();
      },
      (error) => {
        console.error('Error creating recipe', error);
      }
    );
  }

  updateExistingRecipe(recipeId: number) {
    const updatedRecipeData = {
      name: 'Updated Recipe',
    };

    this.recipeService.updateRecipe(recipeId, updatedRecipeData).subscribe(
      (response: Recipe) => {
        console.log('Recipe updated:', response);
        this.loadRecipes();
      },
      (error) => {
        console.error('Error updating recipe', error);
      }
    );
  }

  deleteRecipe(recipeId: number) {
    this.recipeService.deleteRecipe(recipeId).subscribe(
      () => {
        console.log('Recipe deleted');
        this.loadRecipes();
      },
      (error) => {
        console.error('Error deleting recipe', error);
      }
    );
  }
}
