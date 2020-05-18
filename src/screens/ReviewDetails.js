import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Card from '../../shared/Card';

import { globalStyles } from '../../styles/global';

export default function ReviewDetails({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <Text>{route.params.rating}</Text>
            </Card>
        </View>
    )
}