import { BlurView } from '@react-native-community/blur';
import { Blur, Wrapper } from './Navbar.styles';
import { Text } from 'react-native';

const Navbar = () => {
    return (
        <Wrapper>
            <Blur blurAmount={100} blurType={'light'} />
            <Text>asdasd</Text>
        </Wrapper>
    );
};

export default Navbar;
