import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { FavouriteBar } from "../../../components/favourites/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;
const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading, error } = useContext(RestaurantContext);
    const [isToggled, setIsToggled] = useState(false);
    const { favourites } = useContext(FavouritesContext)

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={'tomato'} />
                </LoadingContainer>
            )}
            <Search isFavouritesToggled={isToggled} onFavouritesToggled={() => setIsToggled(!isToggled)} />
            {isToggled && <FavouriteBar favourites={favourites} onNavigate={navigation.navigate} />}
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })} >
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};

RestaurantsScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <Ionicons name="restaurant" size={24} color={focused ? 'tomato' : 'grey'} />
        )
    }
};

export default RestaurantsScreen;