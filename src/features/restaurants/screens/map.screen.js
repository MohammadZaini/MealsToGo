import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const MapScreen = () => {
    return <View>
        <Text>Map</Text>
    </View>
};

MapScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <Feather name="map" size={24} color={focused ? 'tomato' : ''} />
        )
    }
};

export default MapScreen;