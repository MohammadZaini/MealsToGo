import React, { useState, useEffect, useContext } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
    `;

export const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantContext);
    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    longitude: lng,
                    latitude: lat,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <Callout onPress={() => navigation.navigate('RestaurantDetail', { restaurant })} >
                                <MapCallout restaurant={restaurant} />
                            </Callout>

                        </Marker>
                    )
                })}
            </Map>
        </>
    )
};