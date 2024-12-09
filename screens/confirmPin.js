import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Keypad from '../auth/keypad';
import { handleKeyPress } from '../auth/handleKeyPress';

const confirmPin = () => {
  const [pin, setPin] = useState(['', '', '', '']);

  const handleKey = (key) => {
    handleKeyPress(pin, setPin, key);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.pinlogo} />
      <Text style={styles.title}>Confirm your pin</Text>
      <View style={styles.inputRow}>
        {pin.map((digit, index) => (
          <View key={index} style={styles.pinCircle}>
            <Text style={styles.pinText}>{digit ? '•' : ''}
          </Text>
          </View>
        ))}
      </View>
        <Keypad onPress={handleKey} style={styles.keypad} />
        </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 103,
  },
  pinlogo: {
    width: 182,
    height: 41,
    marginTop: 74,
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 26,
    fontWeight: 500,
    color: '#000',
    marginTop: 60,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 101,
    marginBottom: 102,
  },
  pinCircle: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: '#2980B9',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  pinText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 26,
    fontWeight: 500,
    color: '#000',
  },
  keypad: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default confirmPin;
