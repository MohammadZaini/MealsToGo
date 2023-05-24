import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput } from "../components/account.styles";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "react-native";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { onLogin, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    value={email}
                    onChangeText={setEmail}
                    label="E-mail"
                    activeUnderlineColor="blue"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Spacer size="large" />
                <AuthInput
                    value={password}
                    onChangeText={setPassword}
                    label="Password"
                    textContentType="password"
                    secureTextEntry
                    activeUnderlineColor="blue"
                />
                <Spacer size="large" />
                <AuthButton
                    icon="lock-open-outline"
                    color="black"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
                {error ? <Text>{error}</Text> : ''}

            </AccountContainer>
        </AccountBackground>
    )
}