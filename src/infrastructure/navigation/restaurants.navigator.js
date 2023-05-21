import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
            <RestaurantStack.Screen
                name="Restaurants2"
                component={RestaurantsScreen}
            />
        </RestaurantStack.Navigator>
    )
}