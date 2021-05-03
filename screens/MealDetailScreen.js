import React from 'react'
import { View, Text, Button } from 'react-native'
import { ms } from '../Styles'


export const MealDetailScreen = props => {
    return (
        <>
            <View style={ms.container}>
                <Text style={ms.title}>
                    MealDetailScreen
                </Text>
                <Button title="go back to categories" onPress={() => {
                    props.navigation.popToTop()
                }}
                />
            </View>
        </>
    )
}