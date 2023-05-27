import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {

    return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false, CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS }} >
            <SettingsStack.Screen name="Settings2" component={SettingsScreen} />
            <SettingsStack.Screen name="Favourite" component={FavouritesScreen} />
            <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    );
};
