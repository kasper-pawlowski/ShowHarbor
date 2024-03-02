import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Wrapper } from './index.styles';
import { useLocalSearchParams } from 'expo-router';

const Show = () => {
    const item = useLocalSearchParams();

    // useEffect(() => {
    //     console.log('item', item);
    // }, [item]);

    return (
        <Wrapper>
            <Text>index</Text>
        </Wrapper>
    );
};

export default Show;
