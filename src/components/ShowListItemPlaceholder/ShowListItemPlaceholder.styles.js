import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const Wrapper = styled(Animated.View)`
    flex: 1;
    height: 250px;
    background-color: #161515;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin-right: ${({ index }) => (index % 2 === 0 ? '5px' : 0)};
    margin-left: ${({ index }) => (index % 2 !== 0 ? '5px' : 0)};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    gap: 10px;
`;

export const Title = styled(Animated.View)`
    width: 50%;
    height: 22px;
    border-radius: 3px;
    background-color: #646060a9;
`;

export const Info = styled(Animated.View)`
    width: 80%;
    height: 12px;
    border-radius: 3px;
    background-color: #646060a9;
`;
