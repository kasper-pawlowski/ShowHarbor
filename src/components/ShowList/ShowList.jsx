import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDimensions } from '@/context/DimensionsContext';
import { FlashList } from '@shopify/flash-list';
import ShowListItem from '../ShowListItem/ShowListItem';
import axios from 'axios';
import useDebounce from '@/hooks/useDebounce';
import styled from 'styled-components';
import { LoadMoreText, LoadMoreWrapper, LoadingWrapper } from './ShowListy.style';
import { FadeIn, FadeOut } from 'react-native-reanimated';

const ShowList = () => {
    const { headerDimensions, navbarDimensions, setScrollOffsetY, searchValue } = useDimensions();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.themoviedb.org/3/search/multi', {
                    params: {
                        query: debouncedSearch,
                        language: 'en-US',
                        page: page,
                    },
                });
                const filteredResults = response.data.results.filter((item) => item.media_type !== 'person' && item.poster_path !== null);

                setData({ ...response.data, results: filteredResults });
            } catch (error) {
                setError('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [debouncedSearch]);

    const handleLoadMore = async () => {
        console.log('load more');
    };

    if (loading) {
        return (
            <LoadingWrapper entering={FadeIn.duration(200)}>
                <ActivityIndicator size="large" color="#37D67A" />
            </LoadingWrapper>
        );
    }

    // if (error) {
    //     console.log('error');

    //     return <Text style={{ marginTop: 200, backgroundColor: 'blue' }}>{error}</Text>;
    // }

    if (!loading)
        return (
            <View style={{ flex: 1 }}>
                <FlashList
                    data={data.results}
                    renderItem={({ item, index }) => <ShowListItem item={item} index={index} />}
                    estimatedItemSize={10000}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    contentContainerStyle={{
                        paddingRight: 16,
                        paddingLeft: 16,
                        paddingTop: headerDimensions?.height + 20,
                        paddingBottom: navbarDimensions?.height + 20,
                    }}
                    ListFooterComponent={() =>
                        data?.results?.length > 0 && (
                            <View>
                                <LoadMoreWrapper onPress={handleLoadMore} android_ripple={{ color: '#15dd68' }}>
                                    <LoadMoreText>Load more...</LoadMoreText>
                                </LoadMoreWrapper>
                            </View>
                        )
                    }
                />
            </View>
        );
};

export default ShowList;
