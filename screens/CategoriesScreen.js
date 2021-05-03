import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { ms, ci, colors, headerConfig, bg } from '../Styles'
import { CATEGORIES } from '../data/dammyData'


export const CategoriesScreen = props => {

    const item = itemData => {
        return (
            <>
                <View style={{ ...ci.item, backgroundColor: itemData.item.color }}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate({
                            routeName: "CategoriesMeals", params: {
                                id: itemData.item.id
                            }
                        })
                    }}>
                        <Text style={ms.title} numberOfLines={2}>
                            {itemData.item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }


    return (
        <>
            <View style={ci.itemWrapper}>
                <FlatList data={CATEGORIES} renderItem={item} />
            </View>
        </>
    )
}

CategoriesScreen.navigationOptions = () => {
    return headerConfig("Meal Categories")
}