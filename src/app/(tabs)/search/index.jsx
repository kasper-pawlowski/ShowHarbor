import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TempText, Wrapper } from './index.styles';
import ShowList from '@/components/ShowList/ShowList';
import { useDimensions } from '@/context/DimensionsContext';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
    const { searchValue } = useDimensions();
    const debouncedSearch = useDebounce(searchValue, 500);

    if (debouncedSearch.length === 0) return <TempText>No search. to ma sie pojawiac jak z length 0 jescze sie pisze </TempText>;

    if (searchValue.length > 0) return <ShowList />;

    // return loading ? <Text style={{ marginTop: 200 }}>Loading...</Text> : <ShowList />;
};

export default Search;
