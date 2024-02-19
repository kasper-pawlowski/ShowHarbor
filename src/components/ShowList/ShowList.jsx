import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDimensions } from '@/context/DimensionsContext';

const ShowList = () => {
    const { headerDimensions } = useDimensions();
    const data = [
        { id: '1', name: 'Element 1' },
        { id: '2', name: 'Element 2' },
        { id: '3', name: 'Element 3' },
        { id: '4', name: 'Element 4' },
        { id: '5', name: 'Element 5' },
        { id: '6', name: 'Element 6' },
        { id: '7', name: 'Element 7' },
        { id: '8', name: 'Element 8' },
        { id: '9', name: 'Element 9' },
        { id: '10', name: 'Element 10' },
        { id: '11', name: 'Element 11' },
        { id: '12', name: 'Element 12' },
        { id: '13', name: 'Element 13' },
        { id: '14', name: 'Element 14' },
        { id: '15', name: 'Element 15' },
        { id: '16', name: 'Element 16' },
        { id: '17', name: 'Element 17' },
        { id: '18', name: 'Element 18' },
        { id: '19', name: 'Element 19' },
        { id: '20', name: 'Element 20' },
        { id: '21', name: 'Element 21' },
        { id: '22', name: 'Element 22' },
        { id: '23', name: 'Element 23' },
        { id: '24', name: 'Element 24' },
        { id: '25', name: 'Element 25' },
        { id: '26', name: 'Element 26' },
        { id: '27', name: 'Element 27' },
        { id: '28', name: 'Element 28' },
        { id: '29', name: 'Element 29' },
        { id: '30', name: 'Element 30' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={{ color: 'white' }}>{item.name}</Text>
        </View>
    );

    if (!headerDimensions) {
        return;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{
                    marginRight: 10,
                    marginLeft: 10,
                    paddingTop: headerDimensions?.height + 30,
                    paddingBottom: 0,
                    gap: 10,
                }}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    columnWrapper: {
        gap: 10,
    },
    item: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'tomato',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ShowList;

// import { View, Text } from 'react-native';
// import React from 'react';
// import { Poster, ShowWrapper, StyledFlatList } from './ShowList.styles';
// import { useDimensions } from '@/context/DimensionsContext';

// const ShowList = () => {
//     const { headerDimensions } = useDimensions();
//     const data = [
//         { id: '1', name: 'Element 1' },
//         { id: '2', name: 'Element 2' },
//         { id: '3', name: 'Element 3' },
//         { id: '4', name: 'Element 4' },
//         { id: '5', name: 'Element 5' },
//         { id: '6', name: 'Element 6' },
//         { id: '7', name: 'Element 7' },
//         { id: '8', name: 'Element 8' },
//         { id: '9', name: 'Element 9' },
//         { id: '10', name: 'Element 10' },
//         { id: '11', name: 'Element 11' },
//         { id: '12', name: 'Element 12' },
//         { id: '13', name: 'Element 13' },
//         { id: '14', name: 'Element 14' },
//         { id: '15', name: 'Element 15' },
//         { id: '16', name: 'Element 16' },
//         { id: '17', name: 'Element 17' },
//         { id: '18', name: 'Element 18' },
//         { id: '19', name: 'Element 19' },
//         { id: '20', name: 'Element 20' },
//     ];

//     // Funkcja renderująca pojedynczy element listy
//     const renderItem = ({ item }) => (
//         // <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
//         //     <Text>{item.name}</Text>
//         // </View>
//         // <Poster source={require('../../assets/images/poster.png')} />

//         <ShowWrapper>
//             <Text>{item.name}</Text>
//         </ShowWrapper>
//     );

//     return (
//         <StyledFlatList
//             data={data} // Dane do wyświetlenia
//             keyExtractor={(item) => item.id} // Unikalny identyfikator dla każdego elementu
//             renderItem={renderItem} // Funkcja renderująca elementy
//             numColumns={2}
//             contentContainerStyle={{
//                 marginRight: 10,
//                 marginLeft: 10,
//                 // paddingTop: headerDimensions?.height + 10,
//                 paddingTop: 200,
//                 paddingBottom: 0,
//                 gap: 10,
//             }}
//             columnWrapperStyle={{ gap: 10 }}
//         />
//     );
// };

// export default ShowList;
