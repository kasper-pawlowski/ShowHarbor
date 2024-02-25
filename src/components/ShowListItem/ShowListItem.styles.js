import styled from 'styled-components';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export const ItemWrapper = styled(Animated.View)`
    flex: 1;
    /* width: 100%; */
    height: 250px;
    background-color: green;
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
    /* background-color: #ce21215d; */
    z-index: 1;
    padding: 0 10px;
    font-size: 22px;
    font-family: PPNeueMachina-PlainUltrabold;
`;

export const Info = styled(Text)`
    ${(props) => props.theme.text};
    /* background-color: #ce21215d; */
    z-index: 1;
    padding: 0px 10px 10px 10px;
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
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    z-index: -1;
`;
