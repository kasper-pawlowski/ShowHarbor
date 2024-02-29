import { BlurView } from '@react-native-community/blur';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #d8d8d8;
`;

export const Blur = styled(BlurView)`
    width: 100px;
    height: 100px;
`;
