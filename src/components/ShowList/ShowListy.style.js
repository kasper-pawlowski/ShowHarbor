import { Text, View } from 'react-native';
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

export const LoadingText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 20px;
    color: ${(props) => props.theme.colors.grey};
`;
