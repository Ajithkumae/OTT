import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreensName from '../Constants/ScreensName';
import SelectedScreen from '../Screens/SelectedScreen';
import OttScreen from '../Screens/OttScreen';
import SearchScreen from '../Screens/SearchScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreensName.OTTSCREEN}>
        <RootStack.Screen name={ScreensName.OTTSCREEN} component={OttScreen} />
        <RootStack.Screen
          name={ScreensName.SELECTEDSCREEN}
          component={SelectedScreen}
        />
        <RootStack.Screen
          name={ScreensName.SEARCHSCREEN}
          component={SearchScreen}
        />
        <RootStack.Screen
          name={ScreensName.FAVOURITESCREEN}
          component={FavouriteScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
