import { Platform, Pressable, TouchableNativeFeedback, UIManager, StyleSheet, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { Link, Stack, router } from 'expo-router';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { Blur, StyledPressable, StyledView, Wrapper } from './index.styles';
import { Image } from 'expo-image';
import Animated, { FadeOutDown, FadeInUp, LinearTransition, Easing } from 'react-native-reanimated';
import { Button, Text, TouchableRipple } from 'react-native-paper';

// const AnimatedView = Animated.createAnimatedComponent(StyledView);

const Watchlist = () => {
    return (
        <Wrapper>
            <Button dark mode="contained-tonal" onPress={() => console.log('Pressed')} rippleColor={'red'}>
                Press me
            </Button>
        </Wrapper>
    );
};

export default Watchlist;
