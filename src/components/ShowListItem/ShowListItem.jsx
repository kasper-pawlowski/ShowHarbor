import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GradientOverlay, Info, ItemWrapper, Poster, Title } from './ShowListItem.styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowListItem = ({ item, index }) => {
    const [showDetails, setShowDetails] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (showDetails) {
            console.log(showDetails?.name);
        }
    }, [showDetails]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.themoviedb.org/3/${item.media_type}/${item.id}`);

                setShowDetails(response);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Cos nie pyklo');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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

    if (showDetails)
        return (
            <GestureDetector gesture={longPress}>
                <ItemWrapper index={index} style={animatedStyles}>
                    <Title>{item.name ? item.name : item.title ? item.title : 'shit'}</Title>
                    <Info>
                        Sci-fi · {item.media_type === 'tv' ? `${showDetails.number_of_seasons} seasons` : 'film--'} · 2018
                    </Info>
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
