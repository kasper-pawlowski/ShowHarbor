import React, { useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDimensions } from '@/context/DimensionsContext';
import { GradientOverlay, Info, ItemWrapper, Poster, Title } from './ShowList.styles';
import { FlashList } from '@shopify/flash-list';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const ShowList = () => {
    const { headerDimensions, navbarDimensions, setHeaderDimensions } = useDimensions();

    const data = [
        { id: '1', name: 'Element 1' },
        { id: '2', name: 'Element 2' },
        { id: '3', name: 'Element 3' },
        { id: '4', name: 'Element 4' },
        { id: '5', name: 'Element 5' },
        { id: '6', name: 'Element 6' },
        { id: '7', name: 'Element 7' },
        { id: '8', name: 'Element 8' },
        { id: '9', name: 'Element 9' },
        { id: '10', name: 'Element 10' },
    ];

    const Item = ({ item }) => {
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

        const PosterComponent = useMemo(() => <Poster source={require('../../assets/images/poster.png')} />, []);

        return (
            <GestureDetector gesture={longPress}>
                <ItemWrapper index={item.id} style={animatedStyles}>
                    <Title>Requiem dla snu</Title>
                    <Info>Sci-fi · 2h 49m · 2018</Info>
                    <GradientOverlay
                        // Background Linear Gradient
                        colors={['transparent', '#000000dd']}
                        locations={[0, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    {PosterComponent}
                </ItemWrapper>
            </GestureDetector>
        );
    };

    const handleScroll = (e) => {
        e.persist();
        // console.log(e.nativeEvent.contentOffset.y);

        // if (headerDimensions?.height > 100) {
        //     // setHeaderDimensions((prevValue) => {
        //     //     prevValue.height - e.nativeEvent.contentOffset.y;
        //     // });

        //     console.log('wiekszy');
        // }

        // console.log('headerDimensions: ' + headerDimensions?.height);
    };

    if (!headerDimensions) {
        return;
    }

    return (
        <FlashList
            onScroll={(e) => handleScroll(e)}
            scrollEventThrottle={16}
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            estimatedItemSize={30}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            contentContainerStyle={{
                paddingRight: 16,
                paddingLeft: 16,
                paddingTop: headerDimensions?.height + 20,
                paddingBottom: navbarDimensions?.height + 20,
                // gap: 10,
            }}
            // columnWrapperStyle={{ gap: 10 }}
        />
    );
};

export default ShowList;
