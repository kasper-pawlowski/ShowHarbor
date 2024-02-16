import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SearchIcon, SearchInput, SearchInputBlur, SearchInputWrapper, Wrapper } from './index.styles';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);

    return (
        <Wrapper>
            <SearchInputWrapper>
                <SearchInputBlur>
                    <SearchIcon cachePolicy="memory" source={require('../../../assets/icons/search-grey-thin.svg')} />
                    <SearchInput
                        value={searchValue}
                        onChangeText={(e) => setSearchValue(e)}
                        placeholder="Search movie or TV show..."
                        placeholderTextColor="#848484"
                        autoFocus
                    ></SearchInput>
                </SearchInputBlur>
            </SearchInputWrapper>
        </Wrapper>
    );
};

export default Search;
