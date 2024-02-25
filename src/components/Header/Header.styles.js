// import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { Pressable, Text, TextInput, View } from 'react-native';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

export const Wrapper = styled(Animated.View)`
    width: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    /* background-color: #0000007d; */
    z-index: 5;
    display: flex;
    flex-direction: column;
    padding: 0px 16px 0px 16px;
`;

export const Blur = styled(BlurView)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const NavigationHeader = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */

    padding: 48px 0px 18px 0px;
`;

export const Logo = styled(Image)`
    width: 30px;
    height: 30px;
`;

export const Location = styled(Text)`
    ${(props) => props.theme.text};
    color: ${(props) => props.theme.colors.white};
    font-size: 24px;
`;

export const Avatar = styled(Image)`
    width: 34px;
    height: 34px;
    border-radius: 30px;
`;

export const CategorySwitchWrapper = styled(View)``;
export const TempText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 13px;
    color: ${(props) => props.theme.colors.grey};
`;
