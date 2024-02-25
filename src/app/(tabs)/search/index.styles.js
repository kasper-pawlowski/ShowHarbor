import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    display: flex;
    height: 100%;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    /* padding: 76px 16px; */
    /* padding: 0px 16px; */
`;

export const TempText = styled(Text)`
    margin-top: 200px;
    margin: auto;
    ${(props) => props.theme.text};
    font-size: 20px;
`;
