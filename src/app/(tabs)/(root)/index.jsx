import { Button, Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import { Link, Stack, router } from 'expo-router';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { StyledPressable, Wrapper } from './index.styles';
import { Image } from 'expo-image';

const StyledText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 40px;
`;

const Watchlist = () => {
    return <Wrapper></Wrapper>;
};

export default Watchlist;
