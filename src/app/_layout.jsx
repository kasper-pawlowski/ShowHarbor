import { Slot, usePathname } from 'expo-router';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '../styles/theme';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback, useEffect } from 'react';
import { UserAuthContextProvider } from '@/context/AuthContext';
SplashScreen.preventAutoHideAsync();

const StyledView = styled.View`
    background-color: #000;
    height: 100%;
`;

const Root = () => {
    const insets = useSafeAreaInsets();
    const location = usePathname();

    useEffect(() => {
        const ustawPozycje = async () => {
            await NavigationBar.setPositionAsync('absolute');
            await NavigationBar.setBackgroundColorAsync('#ffffff00');
        };

        ustawPozycje();
    }, []);

    const [fontsLoaded, fontError] = useFonts({
        'PPNeueMachina-PlainLight': require('../assets/fonts/PPNeueMachina-PlainLight.otf'),
        'PPNeueMachina-PlainRegular': require('../assets/fonts/PPNeueMachina-PlainRegular.otf'),
        'PPNeueMachina-PlainUltrabold': require('../assets/fonts/PPNeueMachina-PlainUltrabold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
            // await NavigationBar.setPositionAsync('absolute');
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <UserAuthContextProvider>
            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <StyledView style={{ paddingTop: insets.top }} onLayout={onLayoutRootView}>
                        <Slot />
                    </StyledView>
                    <StatusBar style="auto" />
                </SafeAreaProvider>
            </ThemeProvider>
        </UserAuthContextProvider>
    );
};

export default Root;