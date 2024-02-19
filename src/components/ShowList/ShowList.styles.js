import styled from 'styled-components';
import { Image } from 'expo-image';
import { FlatList, ScrollView, View } from 'react-native';

export const StyledFlatList = styled(FlatList)`
    z-index: -1;
    /* display: flex; */
    /* background-color: #ffffff27; */
    /* width: 100%; */
    width: 100%;
    /* padding-top: 120px; */
`;

export const ShowWrapper = styled(View)`
    flex: 1;
    width: 100%;
    height: 100px;
    background-color: green;
    border-radius: 10px;
`;

// export const Poster = styled(Image)`
//     width: 50%;
//     height: 200px;
//     object-fit: cover;
//     border-radius: 10px;
// `;
