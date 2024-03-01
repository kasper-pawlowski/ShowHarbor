import Navbar from '@/components/Navbar/Navbar';
import { useUserAuth } from '@/context/AuthContext';
import { Redirect, Slot, Stack, Tabs, router, usePathname } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'expo-image';
import styled from 'styled-components';
import Header from '@/components/Header/Header';
import { DimenstionsProvider } from '@/context/DimensionsContext';

const Blured = styled(Image)`
    z-index: -2;
    width: 100%;
    height: 220px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const Poster = styled(Image)`
    z-index: -10;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const AppLayout = () => {
    const { user } = useUserAuth();
    const location = usePathname();
    const [route, setRoute] = useState('Watchlist');

    useEffect(() => {
        switch (location) {
            case '/':
                setRoute('Watchlist');
                break;
            case '/search':
                setRoute('Search');
                break;
            case '/watched':
                setRoute('Watched');
                break;
            case '/profile':
                setRoute('Profile');
                break;
            default:
                setRoute('Watchlist');
                break;
        }

        () => console.log('asdasdasda');
    }, [location]);

    const bluredComponent = useMemo(() => <Blured cachePolicy="memory" source={require('../../assets/images/blured.png')} />, []);
    const poster = useMemo(
        () => (
            <Poster
                cachePolicy="memory"
                source={{
                    uri: 'https://images.unsplash.com/photo-1708681847580-aafa143b4598?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
            />
        ),
        []
    );

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    if (user && route !== undefined)
        return (
            <DimenstionsProvider>
                {poster}
                <Slot />
                {/* <Header route={route} /> */}
                <Navbar route={route} />
            </DimenstionsProvider>
        );
};

export default AppLayout;
