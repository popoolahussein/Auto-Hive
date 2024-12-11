import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from './auth/useFont';
import { fontConfig } from './auth/fontsConfig';
import { UserProvider } from './context/UserContext';
import AppNavigation from './AppNavigation';

export default function App() {
  const fontsLoaded = useFonts(fontConfig);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </UserProvider>
  );
}
