import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
