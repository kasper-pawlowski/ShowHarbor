import { Link } from 'expo-router';
import { Avatar, Blur, Location, Logo, NavigationHeader, Wrapper } from './Header.styles';
import { useUserAuth } from '@/context/AuthContext';

const Header = ({ route }) => {
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <Blur intensity={0} tint="default" experimentalBlurMethod="dimezisBlurView">
                <NavigationHeader>
                    <Link href="/">
                        <Logo source={require('../../assets/icons/logo.svg')} />
                    </Link>
                    <Location>{route}</Location>
                    <Link href="/profile">
                        <Avatar source={user.photo} />
                    </Link>
                </NavigationHeader>
            </Blur>
        </Wrapper>
    );
};

export default Header;
