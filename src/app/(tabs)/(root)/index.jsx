import {
    Platform,
    Pressable,
    Text,
    TouchableNativeFeedback,
    UIManager,
    StyleSheet,
    View,
    TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';
import { Link, Stack, router } from 'expo-router';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { Button, StyledPressable, StyledView, Wrapper } from './index.styles';
import { Image } from 'expo-image';
import Animated, { FadeOutDown, FadeInUp, LinearTransition, Easing } from 'react-native-reanimated';

const StyledText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 40px;
`;

// const AnimatedView = Animated.createAnimatedComponent(StyledView);

const Watchlist = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Wrapper>
            <Pressable onPress={() => setExpanded(!expanded)}>
                <StyledText>Expend</StyledText>
            </Pressable>
            <StyledView layout={LinearTransition}>
                <StyledText>asd</StyledText>
                {expanded && <StyledText>expanded</StyledText>}
            </StyledView>
        </Wrapper>
    );
};

export default Watchlist;
