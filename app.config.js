export default {
    expo: {
        name: 'ShowHarbor',
        slug: 'showharbor',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'dark',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'cover',
            backgroundColor: '#000000',
        },
        plugins: ['@react-native-google-signin/google-signin'],
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.firebase.showharbor',
            googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#000000',
            },
            package: 'com.firebase.showharbor',
            googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            eas: {
                projectId: '7af46557-f717-4da2-bbeb-1321e2f38edf',
            },
        },
        owner: 'v0p3r',
    },
};
