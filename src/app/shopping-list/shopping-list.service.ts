import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('apple', 5),
    new Ingredients('orange', 15),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
