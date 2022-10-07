import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0VNPkV72Fx1Huwx01Pc159DqUK_ELmlkEQ&usqp=CAU'
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0VNPkV72Fx1Huwx01Pc159DqUK_ELmlkEQ&usqp=CAU'
    ),
    new Recipe(
      'Test Name 2',
      'Test Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0VNPkV72Fx1Huwx01Pc159DqUK_ELmlkEQ&usqp=CAU'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
