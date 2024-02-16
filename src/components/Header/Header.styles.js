import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    width: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    /* background-color: #0000007d; */
    z-index: 1;
`;

export const Blur = styled(BlurView)`
    padding: 48px 16px 18px 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const NavigationHeader = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
