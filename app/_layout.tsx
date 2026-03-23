// Este arquivo define o layout raiz do aplicativo usando o componente Tabs do Expo Router.
// O Tabs é usado para gerenciar a navegação entre as telas inferiores do aplicativo (Bottom Tabs).
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Localiza Mobile' }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
