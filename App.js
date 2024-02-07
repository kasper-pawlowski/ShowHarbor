import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Root from './src/Root';

const App = () => {
    return (
        <SafeAreaProvider>
            <Root />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
};

export default App;
