import { Redirect, router } from 'expo-router';
import {
    GradientImage,
    LogoWrapper,
    SignInButton,
    SignInButtonText,
    StyledGoogleIcon,
    StyledLogo,
    StyledLogoText,
    StyledView,
} from './sign-in.styled';
import { useUserAuth } from '@/context/AuthContext';

const SignIn = () => {
    const { signIn, user } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await signIn();
            router.replace('/');
        } catch (error) {
            console.error('Error during sign in:', error);
        }
    };

    if (user) {
        return <Redirect href="/" />;
    }

    return (
        <StyledView>
            <LogoWrapper>
                <StyledLogo source={require('../../assets/icons/logo.svg')} />
                <StyledLogoText>ShowHarbor</StyledLogoText>
            </LogoWrapper>
            <SignInButton onPress={handleSignIn} android_ripple={{ color: '#183a26' }}>
                <StyledGoogleIcon source={require('../../assets/icons/google.png')} />
                <SignInButtonText>Sign in with Google</SignInButtonText>
            </SignInButton>
            <GradientImage source={require('../../assets/images/sign-in_gradient.png')} />
        </StyledView>
    );
};

export default SignIn;
