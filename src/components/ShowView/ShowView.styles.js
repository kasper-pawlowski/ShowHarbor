import styled from 'styled-components';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

export const Wrapper = styled(Animated.View)`
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    height: 100%;
`;
