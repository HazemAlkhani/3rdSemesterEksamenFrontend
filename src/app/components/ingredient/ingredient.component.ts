import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientModel } from '../../models/Ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingredients: IngredientModel[] = []; // Use the IngredientModel model as the type

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    // Use ingredientService to fetch ingredients and update the ingredients array.
    this.ingredientService.getIngredients().subscribe(
      (data: IngredientModel[]) => { // Ensure the data is of type IngredientModel[]
        this.ingredients = data;
      },
      (error) => {
        console.error('Error fetching ingredients', error);
      }
    );
  }
}
