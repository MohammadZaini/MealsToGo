import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetail from "../../features/restaurants/screens/restaurantDetail";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}>
            <RestaurantStack.Screen
                name="Restaurants2"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
            />
        </RestaurantStack.Navigator>
    )
}