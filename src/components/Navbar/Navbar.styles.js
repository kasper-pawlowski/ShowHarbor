import { View } from 'react-native';
import styled from 'styled-components';
import { BlurView } from '@react-native-community/blur';

export const Wrapper = styled(View)`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 40px 0;
    background-color: #8b151565;
    overflow: hidden;
`;

export const Blur = styled(BlurView)`
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
`;
