import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import ReviewDetails from '../src/screens/ReviewDetails'

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#eee',
                height: 80
            }
        }}>
            <Stack.Screen name="Home" component={Home} options={{
                title: 'GameZone',
            }} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{
                title: 'Review Details',
            }} />
        </Stack.Navigator>
    );
}

export default HomeStack;