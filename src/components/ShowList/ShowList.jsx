import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDimensions } from '@/context/DimensionsContext';
import { FlashList } from '@shopify/flash-list';
import ShowListItem from '../ShowListItem/ShowListItem';

const ShowList = ({ data }) => {
    const { headerDimensions, navbarDimensions, setScrollOffsetY } = useDimensions();

    if (!headerDimensions) {
        return;
    }

    useEffect(() => {
        console.log('data: ' + data);
    }, [data]);

    return (
        <FlashList
            // onScroll={(e) => setScrollOffsetY(e.nativeEvent.contentOffset.y)}
            data={data}
            renderItem={({ item, index }) => <ShowListItem item={item} index={index} />}
            estimatedItemSize={250}
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
                data.length > 0 && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Text style={{ color: 'black' }}>Footer</Text>
                    </View>
                )
            }
            ListEmptyComponent={() => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>No found</Text>
                </View>
            )}
        />
    );
};

export default ShowList;
