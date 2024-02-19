import { BlurView } from 'expo-blur';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Container = styled(Animated.View)`
    width: 100%;
    padding: 10px 0 20px 0;
`;

export const SwitcherWrapper = styled(View)`
    width: 100%;
    border-radius: 100px;
    overflow: hidden;
`;

export const Wrapper = styled(BlurView)`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.secondary};
`;

export const IndicatorWrapper = styled(Animated.View)`
    height: 100%;
    width: 33.33%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 66.66%;
    z-index: 1;
    overflow: hidden;
    padding: 4px;
`;

export const Indicator = styled(Animated.View)`
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 100px;
    flex: 1;
`;

export const Button = styled(Pressable)`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 26px 0;
    z-index: 2;
`;

export const ButtonText = styled(Text)`
    ${(props) => props.theme.text};
    position: absolute;
    font-size: 16px;
    color: ${({ theme, activeTab, index }) => (activeTab === index ? theme.colors.black : '#d4d4d4')};
`;
