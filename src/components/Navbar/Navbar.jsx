import { BlurView } from '@react-native-community/blur';
import { Blur, Wrapper } from './Navbar.styles';
import { Text } from 'react-native';

const Navbar = () => {
    return (
        <Wrapper>
            {/* <Blur blurAmount={100} blurType={'light'} /> */}
            <BlurView blurAmount={100} style={{ height: 100, width: 100 }} />
            <Text>asdasd</Text>
        </Wrapper>
    );
};

export default Navbar;
