import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensName from '../Constants/ScreensName';
import SelectedScreen from '../Screens/SelectedScreen';
import OttScreen from '../Screens/OttScreen';
import SearchScreen from '../Screens/SearchScreen';

const RootStack = createNativeStackNavigator();

const Navigator = () => {

  return (
    <NavigationContainer>
       <RootStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <RootStack.Screen name={ScreensName.OTTSCREEN} component={OttScreen} />
            <RootStack.Screen name={ScreensName.SELECTEDSCREEN} component={SelectedScreen} />
            <RootStack.Screen name={ScreensName.SEARCHSCREEN} component={SearchScreen} />

          </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;