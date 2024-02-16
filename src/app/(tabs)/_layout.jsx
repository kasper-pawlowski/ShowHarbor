import Navbar from '@/components/Navbar/Navbar';
import { useUserAuth } from '@/context/AuthContext';
import { Redirect, Slot, Stack, Tabs, router, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'expo-image';
import styled from 'styled-components';
import Header from '@/components/Header/Header';

const AppLayout = () => {
    const { user } = useUserAuth();
    const location = usePathname();
    const [route, setRoute] = useState('');

    useEffect(() => {
        console.log(location);
    }, [location]);

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
                setRoute('');
                break;
        }
    }, [location]);

    // const Lila = styled(Image)`
    //     z-index: -1;
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     bottom: 0;
    // `;

    const Blured = styled(Image)`
        z-index: -1;
        width: 100%;
        height: 220px;
        object-fit: initial;
        /* width: 100%; */
        /* height: 100%; */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* border: 2px solid red; */
    `;

    if (!user) {
        return <Redirect href="/(auth)/sign-in" />;
    }

    if (route)
        // tutaj cos tego
        return (
            <>
                <Header route={route} setRoute={setRoute} />
                <Blured cachePolicy="memory" source={require('../../assets/images/blured.png')} />
                <Slot />
                <Navbar route={route} />
                {/* <Lila cachePolicy="none" source={require('../../assets/images/lila.jpg')} /> */}
            </>
        );
};

export default AppLayout;
