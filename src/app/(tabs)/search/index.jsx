import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TempText, Wrapper } from './index.styles';
import ShowList from '@/components/ShowList/ShowList';
import { useDimensions } from '@/context/DimensionsContext';
import axios from 'axios';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
    const { searchValue } = useDimensions();
    const debouncedSearch = useDebounce(searchValue, 500);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.themoviedb.org/3/search/multi', {
                    params: {
                        query: debouncedSearch,
                        language: 'en-US',
                    },
                });
                const filteredResults = response.data.results.filter(
                    (item) => item.media_type !== 'person' && item.poster_path !== null
                );

                setData({ ...response.data, results: filteredResults });
                // setData(filteredResults);
                // console.log(filteredResults);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Cos nie pyklo');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [debouncedSearch]);

    if (searchValue.length === 0) return <TempText>No search. to ma sie pojawiac jak z length 0 jescze sie pisze </TempText>;

    if (loading) {
        console.log('loading');

        return <Text style={{ marginTop: 200, backgroundColor: 'blue' }}>Loading...</Text>;
    }

    if (error) {
        console.log('error');

        return <Text style={{ marginTop: 200, backgroundColor: 'blue' }}>{error}</Text>;
    }

    if (data.results) {
        return <ShowList data={data.results} />;
    }

    // return loading ? <Text style={{ marginTop: 200 }}>Loading...</Text> : <ShowList />;
};

export default Search;
