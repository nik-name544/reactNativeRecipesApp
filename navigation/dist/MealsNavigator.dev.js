"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigationStack = require("react-navigation-stack");

var _CategoriesScreen = require("../screens/CategoriesScreen");

var _CategoryMealsScreen = require("../screens/CategoryMealsScreen");

var _MealDetailScreen = require("../screens/MealDetailScreen");

var _reactNavigation = require("react-navigation");

var MealsNavigator = (0, _reactNavigationStack.createStackNavigator)({
  Categories: _CategoriesScreen.CategoriesScreen,
  CategoriesMeals: _CategoryMealsScreen.CategoryMealsScreen,
  MealDetail: _MealDetailScreen.MealDetailScreen
});

var _default = (0, _reactNavigation.createAppContainer)(MealsNavigator);

exports["default"] = _default;