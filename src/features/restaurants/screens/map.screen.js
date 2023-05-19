import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const MapScreen = () => {
    return <View>
        <Text>Map</Text>
    </View>
};

MapScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <FontAwesome name="map" size={24} color={focused ? 'tomato' : 'grey'} />
        )
    }
};

export default MapScreen;