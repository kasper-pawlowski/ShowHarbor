import { Image } from 'expo-image';
import { TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Container = styled(Animated.View)`
    width: 100%;
    padding: 10px 0 20px 0;
`;

export const Wrapper = styled(View)`
    width: 100%;
    gap: 10px;
    /* background-color: #37d67921; */
    border-radius: 100px;
    border: 1.5px solid #ffffff27;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Image)`
    width: 22px;
    height: 22px;
    margin-left: 16px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    color: ${(props) => props.theme.colors.white};
    padding: 16px 20px 16px 4px;
    border-radius: 10px;
    font-size: 18px;
    font-family: PPNeueMachina-PlainRegular;
`;
