import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, ErrorContainer } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    value={email}
                    onChangeText={setEmail}
                    label="E-mail"
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
                />
                <Spacer size="large" />
                {!isLoading ?
                    <AuthButton
                        icon="lock-open-outline"
                        color="black"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                    : <ActivityIndicator animating={true} color={Colors.blue300} />}
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}

            </AccountContainer>
            <Spacer size="large" />
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                Back
            </AuthButton>
        </AccountBackground>
    )
}