import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Image } from 'expo-image';

export const StyledView = styled(View)`
    display: flex;
    height: 100%;
    padding-top: 100px;
    align-items: center;
`;

export const GradientImage = styled(Image)`
    position: absolute;
    top: -42px;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: -2;
`;

export const LogoWrapper = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

export const StyledLogo = styled(Image)`
    width: 80px;
    height: 80px;
`;

export const StyledLogoText = styled(Text)`
    font-family: 'PPNeueMachina-PlainUltrabold';
    color: #ffffff;
    font-size: 20px;
`;

export const SignInButton = styled(Pressable)`
    background-color: #000000;
    border: 1px solid #ffffff40;
    padding: 20px 26px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    position: absolute;
    bottom: 150px;
`;

export const StyledGoogleIcon = styled(Image)`
    width: 24px;
    height: 24px;
`;

export const SignInButtonText = styled(Text)`
    ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;

export const StyledText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 40px;
`;
