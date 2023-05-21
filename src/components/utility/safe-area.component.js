import styled from "styled-components";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
    flex: 1px;
    margin-top: ${StatusBar.currentHeight}px;
    `;