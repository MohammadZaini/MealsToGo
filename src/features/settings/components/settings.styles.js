import React from "react";
import { List } from "react-native-paper";
import styled from "styled-components";

export const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]}
    background-color: rgba(255, 255, 255, 0.5)
`
export const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    position: absolute;
    height: 100%;
    width: 100%;
`;