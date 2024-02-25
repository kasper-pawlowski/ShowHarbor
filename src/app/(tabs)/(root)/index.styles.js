import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    padding-top: 200px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledPressable = styled(Pressable)`
    background-color: #37d67a;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
`;

export const StyledView = styled(Animated.View)`
    background-color: #252b28;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
