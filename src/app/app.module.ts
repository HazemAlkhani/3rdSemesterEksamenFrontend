import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
