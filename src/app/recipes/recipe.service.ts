import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListSr: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0VNPkV72Fx1Huwx01Pc159DqUK_ELmlkEQ&usqp=CAU',
      [new Ingredients('Meat', 1), new Ingredients('Bread', 15)]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0VNPkV72Fx1Huwx01Pc159DqUK_ELmlkEQ&usqp=CAU',
      [new Ingredients('Chiken', 5), new Ingredients('Lemon Juice', 12)]
    ),
  ];
  getRecipes() {
    return [...this.recipes];
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListSr.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
