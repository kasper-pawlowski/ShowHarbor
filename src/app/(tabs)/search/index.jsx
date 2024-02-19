import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './index.styles';
import ShowList from '@/components/ShowList/ShowList';
import { useDimensions } from '@/context/DimensionsContext';

const Search = () => {
    return <ShowList />;
};

export default Search;
