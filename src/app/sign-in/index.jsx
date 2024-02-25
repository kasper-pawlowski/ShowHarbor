import { Redirect, router, usePathname } from 'expo-router';
import {
    GradientImage,
    LogoWrapper,
    SignInButton,
    SignInButtonText,
    StyledGoogleIcon,
    StyledLogo,
    StyledLogoText,
    StyledView,
} from './index.styled';
import { useUserAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

const SignIn = () => {
    const { signIn, user } = useUserAuth();
    const location = usePathname();

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
            <GradientImage source={require('../../assets/images/sign-in_gradient.png')} />
            <LogoWrapper>
                <StyledLogo source={require('../../assets/icons/logo.svg')} />
                <StyledLogoText>ShowHarbor</StyledLogoText>
            </LogoWrapper>
            <SignInButton onPress={handleSignIn} android_ripple={{ color: '#183a26' }}>
                <StyledGoogleIcon source={require('../../assets/icons/google.png')} />
                <SignInButtonText>Sign in with Google</SignInButtonText>
            </SignInButton>
        </StyledView>
    );
};

export default SignIn;
