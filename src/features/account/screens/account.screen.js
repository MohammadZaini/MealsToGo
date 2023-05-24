import React from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer";
import AnimatedLottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <AnimatedLottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require('../../../../assets/watermelon.json')}
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <Spacer size="large" />
                <AuthButton
                    icon="lock-open-outline"
                    color="black"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </AuthButton>
                <Spacer size="large" >
                    <AuthButton
                        icon="email"
                        color="black"
                        mode="contained"
                        onPress={() => navigation.navigate('Register')}
                    >
                        Register
                    </AuthButton>
                </Spacer>

            </AccountContainer>
        </AccountBackground>
    )
}