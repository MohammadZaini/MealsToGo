import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
    return <View>
        <Text>Map</Text>
    </View>
};

SettingsScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-settings-outline" size={24} color={focused ? 'tomato' : ''} />
        )
    };
};

export default SettingsScreen;