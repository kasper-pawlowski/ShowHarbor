import { Link, router } from 'expo-router';
import { Avatar, Blur, Location, HeaderIcon, NavigationHeader, Wrapper } from './Header.styles';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect, useRef, useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import SearchInput from '../SearchInput/SearchInput';
import Switcher from '../Swticher/Switcher';
import { useDimensions } from '@/context/DimensionsContext';
import { Pressable, Text } from 'react-native';

const Header = ({ route }) => {
    const { user } = useUserAuth();
    const { setHeaderDimensions } = useDimensions();
    const [headerIconState, setHeaderIconState] = useState({
        source: require('../../assets/icons/logo.svg'),
        navigation: 'navigate',
    });

    useEffect(() => {
        let newSource;
        let newNavigation;
        switch (route) {
            case 'Watchlist':
            case 'Search':
            case 'Watched':
                newNavigation = 'navigate';
                newSource = require('../../assets/icons/logo.svg');
                break;
            default:
                newNavigation = 'back';
                newSource = require('../../assets/icons/arrow-left.svg');
                break;
        }
        setHeaderIconState({
            source: newSource,
            navigation: newNavigation,
        });
    }, [route]);

    const handleHeaderIconNavigation = () => {
        if (headerIconState.navigation === 'navigate') {
            router.navigate('/');
        } else {
            router.back();
        }
    };

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
                <Pressable onPress={handleHeaderIconNavigation}>
                    <HeaderIcon transition={200} source={headerIconState.source} />
                </Pressable>
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
