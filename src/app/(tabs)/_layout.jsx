import { useUserAuth } from '@/context/AuthContext';
import { Redirect, Slot } from 'expo-router';

const AppLayout = () => {
    const { user } = useUserAuth();

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    if (user) return <Slot />;
};

export default AppLayout;
