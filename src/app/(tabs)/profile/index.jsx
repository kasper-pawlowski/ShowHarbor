import { View, Text, Button } from 'react-native';
import { StyledText, Wrapper } from './index.styles';
import { useUserAuth } from '@/context/AuthContext';
import { router } from 'expo-router';

const Profile = () => {
    const { signOut, user } = useUserAuth();

    const showSitemap = () => {
        router.push('_sitemap');
    };

    return (
        <Wrapper>
            <StyledText>{user.name}</StyledText>
            <Button title="Sign Out" onPress={signOut} />
            <Button title="Show Sitemap" onPress={showSitemap} />
        </Wrapper>
    );
};

export default Profile;
