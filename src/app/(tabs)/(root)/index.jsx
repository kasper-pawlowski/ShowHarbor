import { Button } from 'react-native-paper';
import { Wrapper } from './index.styles';
import Navbar from '@/components/Navbar/Navbar';

const Watchlist = () => {
    return (
        <Wrapper>
            <Button dark mode="contained-tonal" onPress={() => console.log('Pressed')} rippleColor={'red'}>
                Press me
            </Button>
        </Wrapper>
    );
};

export default Watchlist;
