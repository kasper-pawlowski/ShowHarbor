import { BlurView } from '@react-native-community/blur';
import { Wrapper } from './Navbar.styles';
import { Text } from 'react-native';

const Navbar = () => {
    return (
        <Wrapper>
            <BlurView blurAmount={100} />
            <Text>asdasd</Text>
        </Wrapper>
    );
};

export default Navbar;
