import Navbar from '@/components/Navbar/Navbar';
import { useUserAuth } from '@/context/AuthContext';
import { Redirect, Slot } from 'expo-router';

const AppLayout = () => {
    const { user } = useUserAuth();

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    if (user)
        return (
            <>
                <Slot />
                <Navbar />
            </>
        );
};

export default AppLayout;
