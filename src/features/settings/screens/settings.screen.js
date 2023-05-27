import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]}
`
const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const { onLogout, user } = useContext(AuthenticationContext);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`)
        setPhoto(photoUri);
    }

    useFocusEffect(
        React.useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Camera')} >
                    {/* {!photo && (
                        <Avatar.Icon size={180} icon="human" color="white" style={{ backgroundColor: 'tomato' }} />
                    )}
                    {
                        photo && (
                            <Avatar.Image size={180} source={{ uri: photo }} color="white" style={{ backgroundColor: 'tomato' }} />
                        )
                    } */}
                    {photo
                        ? <Avatar.Image size={180} source={{ uri: photo }} color="white" style={{ backgroundColor: 'tomato' }} />
                        : <Avatar.Icon size={180} icon="human" color="white" style={{ backgroundColor: 'tomato' }} />
                    }
                    <Spacer position="top" size="large" >
                        <Text variant="label" >{user.email}</Text>
                    </Spacer>
                </TouchableOpacity>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Favourite"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate('Favourite')}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>)

};