import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import ReviewDetails from '../src/screens/ReviewDetails';
import Header from '../shared/Header';

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
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                    headerTitleAlign: 'center' //Add this prop when you want either reset all preset styles from bar title or put the title in the midle of screen
                }
            }} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{
                title: 'Review Details',
            }} />
        </Stack.Navigator>
    );
}

export default HomeStack;