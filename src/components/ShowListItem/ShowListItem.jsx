import { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
    GradientOverlay,
    Info,
    InfoText,
    InfoWrapper,
    ItemWrapper,
    PlaceholderItemWrapper,
    Poster,
    RatingText,
    RatingWrapper,
    Title,
} from './ShowListItem.styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowListItem = ({ item, index }) => {
    const [showDetails, setShowDetails] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.themoviedb.org/3/${item.media_type}/${item.id}`);

                setShowDetails(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Cos nie pyklo');
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
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

    const formatRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        if (hours === 0) {
            return `${minutes}m`;
        } else if (minutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h ${minutes}m`;
        }
    };

    const getYearFromDate = (date) => {
        return date?.split('-')[0];
    };

    if (loading) return <PlaceholderItemWrapper index={index} />;

    if (!loading && showDetails)
        return (
            <GestureDetector gesture={longPress}>
                <ItemWrapper index={index} style={animatedStyles} entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                    <Poster source={`https://image.tmdb.org/t/p/w342${item.poster_path}`} recyclingKey={`${item.id}`} onLoad={handleImageLoad} />
                    <GradientOverlay colors={['transparent', '#000000dd']} locations={[0, 1]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />

                    <Title>{item.name ? item.name : item.title ? item.title : 'shit'}</Title>
                    <InfoWrapper>
                        {showDetails.genres.length ? <InfoText>{showDetails.genres[0].name}</InfoText> : <></>}
                        {showDetails.genres.length ? <InfoText>·</InfoText> : <></>}
                        {item.media_type === 'movie' && <InfoText>{formatRuntime(showDetails.runtime)}</InfoText>}
                        {item.media_type === 'tv' && (
                            <InfoText>{`${showDetails.number_of_seasons} ${showDetails.number_of_seasons >= 1 ? 'seasons' : 'seasons'}`}</InfoText>
                        )}
                        <InfoText>·</InfoText>
                        {item.media_type === 'movie' && <InfoText>{getYearFromDate(showDetails.release_date)}</InfoText>}
                        {item.media_type === 'tv' && <InfoText>{getYearFromDate(showDetails.first_air_date)}</InfoText>}
                    </InfoWrapper>
                    {showDetails.vote_average ? (
                        <RatingWrapper>
                            <RatingText>{showDetails.vote_average.toFixed(1)}</RatingText>
                        </RatingWrapper>
                    ) : (
                        <></>
                    )}
                </ItemWrapper>
            </GestureDetector>
        );
};

export default ShowListItem;
