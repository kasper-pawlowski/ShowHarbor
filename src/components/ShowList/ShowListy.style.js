import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    flex: 1;
`;

export const LoadingWrapper = styled(Animated.View)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

export const LoadMoreWrapper = styled(Pressable)`
    background-color: #0000001a;
    border: 1px solid #ffffff40;
    padding: 20px 26px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    margin-top: 10px;
`;

export const LoadMoreText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 16px;
    color: ${(props) => props.theme.colors.grey};
`;
