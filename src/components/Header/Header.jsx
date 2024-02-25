import { Link } from 'expo-router';
import { Avatar, Blur, Location, Logo, NavigationHeader, Wrapper } from './Header.styles';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect, useRef, useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import SearchInput from '../SearchInput/SearchInput';
import Switcher from '../Swticher/Switcher';
import { useDimensions } from '@/context/DimensionsContext';
import { Text } from 'react-native';

const Header = ({ route }) => {
    const { user } = useUserAuth();
    const { setHeaderDimensions } = useDimensions();

    return (
        <Wrapper
            layout={LinearTransition}
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setHeaderDimensions({
                    height: height,
                });
            }}
        >
            <Blur blurAmount={100} />
            <NavigationHeader>
                <Link href="/">
                    <Logo source={require('../../assets/icons/logo.svg')} />
                </Link>
                <Location>{route}</Location>
                <Link href="/profile">
                    <Avatar source={user.photo} />
                </Link>
            </NavigationHeader>

            {(route === 'Watchlist' || route === 'Watched') && <Switcher route={route} />}
            {route === 'Search' && <SearchInput />}
        </Wrapper>
    );
};

export default Header;
