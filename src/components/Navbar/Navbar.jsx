import { router } from 'expo-router';
import { Blur, NavPressable, Label, Wrapper, Icon } from './Navbar.styles';
import { useDimensions } from '@/context/DimensionsContext';
import { useEffect } from 'react';

const Navbar = ({ route }) => {
    const { setNavbarDimensions } = useDimensions();

    return (
        <Wrapper
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setNavbarDimensions({
                    height: height,
                });
            }}
        >
            <Blur blurAmount={100} />
            <NavPressable onPress={() => router.push('/')} android_ripple={{ color: '#00ff22' }}>
                <Icon tintColor={route === 'Watchlist' ? '#37D67A' : '#848484'} source={require('../../assets/icons/save-grey.svg')} />
                <Label label="Watchlist" route={route}>
                    Watchlist
                </Label>
            </NavPressable>
            <NavPressable onPress={() => router.push('/search')} android_ripple={{ color: '#00ff22', foreground: true }}>
                <Icon tintColor={route === 'Search' ? '#37D67A' : '#848484'} source={require('../../assets/icons/search-grey.svg')} />
                <Label label="Search" route={route}>
                    Search
                </Label>
            </NavPressable>
            <NavPressable onPress={() => router.push('watched')} android_ripple={{ color: '#00ff22', foreground: true }}>
                <Icon tintColor={route === 'Watched' ? '#37D67A' : '#848484'} source={require('../../assets/icons/check-grey.svg')} />
                <Label label="Watched" route={route}>
                    Watched
                </Label>
            </NavPressable>
        </Wrapper>
    );
};

export default Navbar;
