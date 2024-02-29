// import { BlurView } from 'expo-blur';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(BlurView)`
    /* width: 100%; */
    position: absolute;
    bottom: 0;
    overflow: hidden;
    /* background-color: #0000007d; */
    /* z-index: 5; */
    padding-bottom: 14px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

// export const Blur = styled(BlurView)`
//     position: absolute;
//     width: 100px;
//     height: 100px;
// `;

export const NavPressable = styled(Pressable)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 18px 0px;
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
