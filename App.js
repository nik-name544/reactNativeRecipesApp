import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ms } from './Styles';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(e) => console.log(e)}
    />
  }

  return (
    <>
      <MealsNavigator />
      {/* <View style={ms.container}>
        <Text style={ms.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </>
  );
}
