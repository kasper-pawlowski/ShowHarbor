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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import axios from 'axios';
SplashScreen.preventAutoHideAsync();

const StyledView = styled.View`
    background-color: #000;
    height: 100%;
`;

const Root = () => {
    const insets = useSafeAreaInsets();
    const location = usePathname();

    axios.defaults.headers.common = {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGYwMWVkMDc3ODA3MTQwMDU5M2YyOTc2YmJmNzc4MiIsInN1YiI6IjVmOGQ1Y2E0ZjhhZWU4MDAzNmJkYTc5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLzXE0m4S4EP-_85vFryaxr8yIN63PEIWiOYBBqNKJ4`,
    };

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
        <PaperProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <UserAuthContextProvider>
                    <ThemeProvider theme={theme}>
                        <SafeAreaProvider>
                            {/* <StyledView style={{ paddingTop: insets.top }} onLayout={onLayoutRootView}> */}
                            <StyledView onLayout={onLayoutRootView}>
                                <Slot />
                            </StyledView>
                            <StatusBar style="auto" />
                        </SafeAreaProvider>
                    </ThemeProvider>
                </UserAuthContextProvider>
            </GestureHandlerRootView>
        </PaperProvider>
    );
};

export default Root;
