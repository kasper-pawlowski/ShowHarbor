import { BlurView } from '@react-native-community/blur';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    width: 100%;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    /* background-color: #0000007d; */
    /* z-index: 5; */

    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

export const BlurWrapper = styled(View)`
    position: absolute;
    z-index: -1;
    flex: 1;
    /* background-color: blue; */
    width: 100%;
    height: 100%;
`;

export const Blur = styled(BlurView)`
    flex: 1;
    z-index: -2;
`;

export const NavPressable = styled(Pressable)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 18px 0px;
    margin-bottom: 14px;
`;

export const Icon = styled(Image)`
    width: 24px;
    height: 24px;
`;

export const Label = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 13px;
    color: ${(props) => (props.route === props.label ? props.theme.colors.main : props.theme.colors.grey)};
`;
