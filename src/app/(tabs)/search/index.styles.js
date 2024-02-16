import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    display: flex;
    height: 100%;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    padding: 76px 16px;
`;

export const SearchInputWrapper = styled(View)`
    width: 100%;

    gap: 10px;
    /* background-color: #ffffff15; */
    border-radius: 10px;
    border: 1.5px solid #ffffff44;
`;

export const SearchInputBlur = styled(BlurView)`
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const SearchIcon = styled(Image)`
    width: 28px;
    height: 28px;
`;

export const SearchInput = styled(TextInput)`
    background-color: #493c3cfd;
    color: ${(props) => props.theme.colors.white};
    padding: 20px;
    border-radius: 10px;
    font-size: 18px;
    /* width: 100%; */
    font-family: PPNeueMachina-PlainRegular;
`;
