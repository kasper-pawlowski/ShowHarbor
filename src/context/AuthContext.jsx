import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const userAuthContext = createContext();

const storage = new MMKVLoader().initialize();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useMMKVStorage('user', storage);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '896945858773-gmlv8be4qiknrs6509haspmf7ne2uii1.apps.googleusercontent.com',
        });

        // getCurrentUserInfo = async () => {
        //     try {
        //         const userInfo = await GoogleSignin.signInSilently();
        //         if (userInfo.user) {
        //             setUser(userInfo.user);
        //         }
        //     } catch (error) {
        //         if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        //             // user has not signed in yet
        //             setError('noUser');
        //             console.log('user has not signed in yet');
        //         } else {
        //             // some other error
        //             console.log('some other error');
        //         }
        //     }
        // };

        // getCurrentUserInfo();
    }, []);

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo.user);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('operation (e.g. sign in) is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated');
            } else {
                console.log('some other error happened');
            }
        }
    };

    signOut = async () => {
        try {
            setUser();
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
            console.log('signOut error');
        }
    };

    return <userAuthContext.Provider value={{ signIn, signOut, user, error }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
