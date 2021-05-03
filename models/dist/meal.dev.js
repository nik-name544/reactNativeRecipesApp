"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meal = function Meal(id, categoryIds, title, affordability, complexity, imgSrc, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
  _classCallCheck(this, Meal);

  this.id = id;
  this.categoryIds = categoryIds;
  this.title = title;
  this.affordability = affordability;
  this.complexity = complexity;
  this.imgSrc = imgSrc;
  this.duration = duration;
  this.ingredients = ingredients;
  this.steps = steps;
  this.isGlutenFree = isGlutenFree;
  this.isVegan = isVegan;
  this.isVegetarian = isVegetarian;
  this.isLactoseFree = isLactoseFree;
};

var _default = Meal;
exports["default"] = _default;