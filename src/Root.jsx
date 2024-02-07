import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Image } from 'expo-image';
import Blob from './assets/blob.svg';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';

const StyledView = styled.View`
    background-color: #000000;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledImage = styled.Image`
    height: 100%;
    width: 100%;
`;

const Root = () => {
    const insets = useSafeAreaInsets();
    const [error, setError] = useState();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '896945858773-gmlv8be4qiknrs6509haspmf7ne2uii1.apps.googleusercontent.com',
        });
    }, []);

    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo(user);
            setError();
        } catch (e) {
            setError(e);
        }
    };

    const logout = () => {
        setUserInfo();
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
    };

    return (
        <StyledView style={{ paddingTop: insets.top }}>
            <Text style={{ color: '#37D67A' }}> Hello </Text>
            {/* <Blob /> */}
            {/* <StyledImage source={require('./assets/blur.png')} blurRadius={0} /> */}
            <Text style={{ color: '#37D67A' }}> Hello </Text>
            <Button title="Learn More" />
            <Text>{JSON.stringify(error)}</Text>
            {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
            {userInfo ? (
                <Button title="Logout" onPress={logout} />
            ) : (
                <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark} onPress={signin} />
            )}
        </StyledView>
    );
};

export default Root;
