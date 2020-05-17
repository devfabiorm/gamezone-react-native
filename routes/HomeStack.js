import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../src/screens/Home';
import ReviewDetails from '../src/screens/ReviewDetails'

const Stack = createStackNavigator();

export default HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}