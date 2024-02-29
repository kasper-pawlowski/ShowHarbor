import { BlurView } from '@react-native-community/blur';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    padding-top: 200px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Blur = styled(BlurView)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const StyledPressable = styled(Pressable)`
    padding: 30px;
    width: 100%;
    background-color: #0000001c;
    border: 1px solid blue;
`;
