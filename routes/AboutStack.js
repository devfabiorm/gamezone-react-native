import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../src/screens/About'

const Stack = createStackNavigator();

const AbouStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#eee',
                height: 80
            }
        }}>
            <Stack.Screen name="About" component={About} options={{
                title: 'About GameZone',
            }} />
        </Stack.Navigator>
    );
}

export default AbouStack;