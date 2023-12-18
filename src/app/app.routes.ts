// In app.routes.ts
import { Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent, pathMatch: 'full' },
  { path: 'ingredients', component: IngredientComponent, pathMatch: 'full' },
  { path: 'menu-items', component: MenuItemComponent, pathMatch: 'full' },
];
