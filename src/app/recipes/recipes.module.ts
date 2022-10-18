import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    // any module that you are use here in the components you should import it and put it in the imports array
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],

  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}

// steps to seperate the app module :
// 1- move the declarations
// 2- import the modules that your components use
// 3- export the components that in the declaration array
