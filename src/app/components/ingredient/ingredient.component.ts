import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingredients: any[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    // Use ingredientService to fetch ingredients and update the ingredients array.
    this.ingredientService.getIngredients().subscribe(data => {
      this.ingredients = data;
    });
  }
}
