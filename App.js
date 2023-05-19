import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MapScreen from './src/features/restaurants/screens/map.screen';
import SettingsScreen from './src/features/restaurants/screens/setting.screen';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

const navigator = createMaterialBottomTabNavigator({
  Restaurants: RestaurantsScreen,
  Map: MapScreen,
  Settings: SettingsScreen,

}, {
  barStyle: {
    backgroundColor: 'white'
  }
}, {
  initialRouteName: 'Restaurants',
})

const App = createAppContainer(navigator)

export default () => {

  const [oswaldsLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldsLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <App />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}