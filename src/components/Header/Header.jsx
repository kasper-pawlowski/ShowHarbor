import { Link } from 'expo-router';
import { Avatar, Blur, Location, Logo, NavigationHeader, Wrapper } from './Header.styles';
import { useUserAuth } from '@/context/AuthContext';
import { useDimensions } from '@/context/DimensionsContext';
import { useEffect, useRef, useState } from 'react';
import Animated, {
    FadeIn,
    FadeOut,
    Transition,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import SearchInput from '../SearchInput/SearchInput';
import Switcher from '../Swticher/Switcher';

const Header = ({ route }) => {
    const { user } = useUserAuth();
    const [navigationHeaderDimensions, setNavigationHeaderDimensions] = useState();
    const { searchInputDimensions, switcherDimensions, setHeaderDimensions, scrollOffsetY } = useDimensions();

    const height = useSharedValue(navigationHeaderDimensions?.height);

    useEffect(() => {
        let targetHeight = navigationHeaderDimensions?.height;

        if (route === 'Search') {
            targetHeight += searchInputDimensions?.height;
        } else if (route === 'Watchlist') {
            targetHeight += switcherDimensions?.height;
        } else if (route === 'Watched') {
            targetHeight += switcherDimensions?.height;
        }

        height.value = withSpring(targetHeight, {
            duration: 500,
            dampingRatio: 1,
            stiffness: 100,
        });
    }, [route]);

    const headerLayoutHandler = (event) => {
        const { height } = event.nativeEvent.layout;
        setHeaderDimensions({
            height: height,
        });
    };

    const navigationLayoutHandler = (event) => {
        const { height } = event.nativeEvent.layout;
        setNavigationHeaderDimensions({
            height: height,
        });
    };

    return (
        // <Wrapper onLayout={headerLayoutHandler} style={{ height }}>
        <Wrapper>
            <Blur blurAmount={100} />
            <NavigationHeader onLayout={navigationLayoutHandler}>
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
