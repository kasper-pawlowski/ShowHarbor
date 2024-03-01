import { Button } from 'react-native-paper';
import { Blur, Wrapper } from './index.styles';
import Navbar from '@/components/Navbar/Navbar';
import { Image } from 'expo-image';

const Watchlist = () => {
    return (
        <Wrapper>
            <Image
                // blurRadius={20}
                style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
                source={{ uri: 'https://source.unsplash.com/random' }}
            />
            <Button dark mode="contained-tonal" onPress={() => console.log('Pressed')} rippleColor={'red'}>
                Press me
            </Button>
            {/* <Navbar /> */}
        </Wrapper>
    );
};

export default Watchlist;
