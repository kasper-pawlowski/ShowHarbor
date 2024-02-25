import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GradientOverlay, Info, ItemWrapper, Poster, Title } from './ShowListItem.styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const ShowListItem = ({ item, index }) => {
    const pressed = useSharedValue(false);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withTiming(pressed.value ? 0.9 : 1) }],
    }));

    const longPress = Gesture.LongPress()
        .onBegin(() => {
            pressed.value = true;
        })

        .onFinalize(() => {
            pressed.value = false;
        });

    useEffect(() => {
        pressed.value = false;
    }, [item.id, pressed]);

    return (
        <GestureDetector gesture={longPress}>
            <ItemWrapper index={index} style={animatedStyles}>
                <Title>{item.name ? item.name : item.title ? item.title : 'shit'}</Title>
                <Info>Sci-fi · 2h 49m · 2018</Info>
                <GradientOverlay
                    colors={['transparent', '#000000dd']}
                    locations={[0, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />
                <Poster source={`https://image.tmdb.org/t/p/w342${item.poster_path}`} />
            </ItemWrapper>
        </GestureDetector>
    );
};

export default ShowListItem;
