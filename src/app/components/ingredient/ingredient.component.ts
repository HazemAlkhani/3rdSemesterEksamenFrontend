import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientModel } from '../../models/Ingredient.model';
import assert from "node:assert";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingredients: IngredientModel[] = [];
  errorMessage: string = '';

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientService.getIngredients().subscribe(
      (data: IngredientModel[]) => {
        this.ingredients = data;
      },
      (error) => {
        console.error('Error fetching ingredients', error);
        this.errorMessage = 'Error fetching ingredients';
      }
    );
  }

  createNewIngredient() {
    const newIngredientData = {
      name: 'New Ingredient',
    };

    this.ingredientService.createIngredient(newIngredientData).subscribe(
      (response: IngredientModel) => {
        console.log('New ingredient created:', response);
        this.loadIngredients();
      },
      (error) => {
        console.error('Error creating ingredient', error);
      }
    );
  }

  updateExistingIngredient(ingredientId: number) {
    const updatedIngredientData = {
      name: 'Updated Ingredient',
    };

    this.ingredientService.updateIngredient(ingredientId, updatedIngredientData).subscribe(
      (response: IngredientModel) => {
        console.log('Ingredient updated:', response);
        this.loadIngredients();
      },
      (error) => {
        console.error('Error updating ingredient', error);
      }
    );
  }

  deleteIngredient(ingredientId: number) {
    this.ingredientService.deleteIngredient(ingredientId).subscribe(
      () => {
        console.log('Ingredient deleted');
        this.loadIngredients();
      },
      (error) => {
        console.error('Error deleting ingredient', error);
      }
    );
  }

  protected readonly assert = assert;
}
