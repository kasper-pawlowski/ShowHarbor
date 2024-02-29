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
    border: 1px solid green;
`;

export const Blur = styled(BlurView)`
    width: 100px;
    height: 100px;
`;
