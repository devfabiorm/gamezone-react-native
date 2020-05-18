import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../src/screens/About';
import Header from '../shared/Header';

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
            <Stack.Screen name="About" component={About} options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='About Gamezone' />,
                    headerTitleAlign: 'center' //Add this prop when you want either reset all preset styles from bar title or put the title in the midle of screen
                }
            }} />
        </Stack.Navigator>
    );
}

export default AbouStack;