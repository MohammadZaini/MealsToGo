import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";



const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const Settings = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <Text>Settings</Text>
            <Button title="logout" onPress={() => onLogout()} />
        </SafeArea>)

};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={createScreenOptions}

    >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
);