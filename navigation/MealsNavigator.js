import { createStackNavigator } from 'react-navigation-stack'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen'
import { MealDetailScreen } from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
})


export default createAppContainer(MealsNavigator)