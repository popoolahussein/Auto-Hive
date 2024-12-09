import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Keypad from '../auth/keypad';
import { handleKeyPress } from '../auth/handleKeyPress';

const OTPEntryScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleKey = (key) => {
    handleKeyPress(otp, setOtp, key);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.otplogo} />
      <Text style={styles.otptitle}>Input OTP</Text>
      <Text style={styles.otpsubtitle}>
        OTP sent. Please check your email or{"\n"} SMS for the OTP.{' '}
        <Pressable style={styles.resendOtpsubtitle}>
          <Text>Resend OTP</Text>
        </Pressable>
      </Text>
      <View style={styles.inputRow}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.otpBox}>
            <Text style={styles.otpText}>{digit}</Text>
          </View>
        ))}
      </View>
      <View style={styles.keypad}>
        <Keypad onPress={(key) => handleKeyPress(otp, setOtp, key)} otp={otp} setOtp={setOtp} handleKeyPress={handleKey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 103,
  },
  otplogo: {
    width: 182,
    height: 41,
    marginTop: 74,
  },
  otptitle: {
    fontSize: 26,
    fontWeight: '500',
    marginTop: 52,
    marginBottom: 18,
    color: '#333',
  },
  otpsubtitle: {
    fontSize: 13,
    fontWeight: 400,
    textAlign: 'center',
    color: '#000',
  },
  resendOtpsubtitle: {
    color: '#2980B9',
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 49,
    marginBottom: 70,
    gap: 11,
  },
  otpBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#2980B9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    
  },
  otpText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#000',
  },
  keypad: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OTPEntryScreen;
