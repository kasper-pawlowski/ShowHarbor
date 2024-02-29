import { Button } from 'react-native-paper';
import { Blur, Wrapper } from './index.styles';
import Navbar from '@/components/Navbar/Navbar';
import { Image } from 'expo-image';
import { BlurView } from '@react-native-community/blur';

const Watchlist = () => {
    return (
        <Wrapper>
            <Image style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} source={{ uri: 'https://source.unsplash.com/random' }} />
            <Blur blurAmount={100} blurType={'dark'}>
                <Button dark mode="contained-tonal" onPress={() => console.log('Pressed')} rippleColor={'red'}>
                    Press me
                </Button>
            </Blur>
        </Wrapper>
    );
};

export default Watchlist;
