import React from 'react'
import { View, Text, Button, Platform, FlatList } from "react-native"
import { ms, colors, headerConfig } from '../Styles'
import { CATEGORIES, MEALS } from '../data/dammyData'

export const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('id')

    const mealItem = itemData => {
        return (
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        )
    }

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <>
            <View style={ms.container}>
                <FlatList data={displayedMeals} renderItem={mealItem} />
                {/* <Text style={ms.title}>
                    {selectedCategory.title}reactNativeRecipesApp
                </Text>
                <Button title="go to meal Detail" onPress={
                    () => {
                        props.navigation.push("MealDetail")
                    }
                }
                />
                <Button title="pop" onPress={() => { props.navigation.pop() }} /> */}
                {/* <Button title="go back" onPress={() => { props.navigation.goBack() }} /> */}
            </View>
        </>
    )
}

CategoryMealsScreen.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam('id')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return headerConfig(selectedCategory.title)
}
// {
//     headerTitle: "Meal Categories",
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? colors.primary : ''
//     },
//     headerTintColor: Platform.OS === 'android' ? colors.white : colors.primary

// }