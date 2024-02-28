import styled from 'styled-components';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from '@react-native-community/blur';

export const ItemWrapper = styled(Animated.View)`
    flex: 1;
    height: 250px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin-right: ${({ index }) => (index % 2 === 0 ? '5px' : 0)};
    margin-left: ${({ index }) => (index % 2 !== 0 ? '5px' : 0)};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Title = styled(Text)`
    ${(props) => props.theme.text};
    z-index: 1;
    padding: 0 10px;
    font-size: 22px;
    font-family: PPNeueMachina-PlainUltrabold;
`;

export const InfoWrapper = styled(View)`
    z-index: 1;
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const InfoText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 12px;
    color: ${(props) => props.theme.colors.grey};
`;

export const GradientOverlay = styled(LinearGradient)`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Poster = styled(Image)`
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

export const RatingWrapper = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    background-color: #8d8888a9;
    padding: 4px 8px;
`;

export const RatingText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 10px;
    color: ${(props) => props.theme.colors.white};
`;

export const PlaceholderItemWrapper = styled(Animated.View)`
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
`;
