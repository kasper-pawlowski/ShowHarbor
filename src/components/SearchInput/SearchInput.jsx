import { useDimensions } from '@/context/DimensionsContext';
import { Icon, Blur, Wrapper, Input, Container } from './SearchInput.styles';
import { useEffect } from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';

const SearchInput = () => {
    const { searchValue, setSearchValue, setSearchInputDimensions } = useDimensions();

    useEffect(() => {
        setSearchValue('');
    }, []);

    const layoutHandler = (event) => {
        const { height } = event.nativeEvent.layout;
        setSearchInputDimensions({
            height: height,
        });
    };

    return (
        <Container onLayout={layoutHandler} entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
            <Wrapper>
                <Blur intensity={0} tint="dark" experimentalBlurMethod="dimezisBlurView">
                    <Icon cachePolicy="memory" source={require('../../assets/icons/search-grey-thin.svg')} />
                    <Input
                        value={searchValue}
                        onChangeText={(e) => setSearchValue(e)}
                        placeholder="Search movie or TV show..."
                        placeholderTextColor="#b1b1b1"
                        searchValue={searchValue}
                        // autoFocus
                    ></Input>
                </Blur>
            </Wrapper>
        </Container>
    );
};

export default SearchInput;
