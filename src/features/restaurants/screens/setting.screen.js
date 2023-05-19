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
            <Ionicons name="md-settings" size={24} color={focused ? 'tomato' : 'grey'} />
        )
    };
};

export default SettingsScreen;