import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {

    return (
        <SettingsStack.Navigator screenOptions={{ CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS }} >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen name="Favourite" component={FavouritesScreen} />
        </SettingsStack.Navigator>
    )

}
