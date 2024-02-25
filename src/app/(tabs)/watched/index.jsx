import { View, Text, Button } from 'react-native';
import React from 'react';
import { Wrapper } from './index.styles';
import { useUserAuth } from '@/context/AuthContext';

const Watched = () => {
    const { signOut, user } = useUserAuth();

    return (
        <Wrapper>
            <Text>Watched</Text>
        </Wrapper>
    );
};

export default Watched;
