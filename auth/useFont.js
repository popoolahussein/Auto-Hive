import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export const useFonts = (fontConfig) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function initializeFonts() {
      try {
        await Font.loadAsync(fontConfig);
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    initializeFonts();
  }, [fontConfig]);

  return fontsLoaded;
};
