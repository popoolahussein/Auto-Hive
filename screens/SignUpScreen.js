import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../auth/styles';
import Button from '../auth/button';
import { UserContext } from '../context/UserContext';

const SignUpScreen = () => {
  const { registerUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    registerUser(newUser);
    Alert.alert('Success', 'Registration successful');
    navigation.navigate('verificationLink');
  };

  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const navigationi = useNavigation();

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.signuptitle}>New user!</Text>
      <Text style={styles.signupsubtitle}>Register</Text>

      <View style={styles.socialButtonsii}>
        <TouchableOpacity style={styles.authicon}>
          <Image
            source={require('../assets/googleicon.png')}
            style={styles.authicon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.authicon}>
          <Image
            source={require('../assets/iosicon.png')}
            style={styles.authicon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.orTextii}>Or</Text>

      <TextInput style={styles.signupinputbox} placeholder="First name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.signupinputbox} placeholder="Last name" value={lastName} onChangeText={setLastName} />
      <View style={styles.emailboxii}>
        <Text style={styles.emailhead}>Email</Text>
        <TextInput
          style={styles.email}
          placeholder="deni.dudar@gmail.com"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.phoneInputContainer}>
        <TextInput style={styles.countryCode} placeholder="+234" placeholderTextColor="#333" keyboardType="phone-pad" />
        <View style={styles.phoneInputbox}>
        <TextInput style={styles.phoneInput} placeholder="Phone number" keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone} />
        </View>
      </View>

      <View style={styles.signupinputbox}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password} 
          onChangeText={setPassword}
        />
        <FontAwesome
          name={passwordVisible ? "eye-slash" : "eye"}
          size={20}
          color="#999"
          style={styles.eyeIconii}
          onPress={handlePasswordVisibility}
        />
      </View>

      <View style={styles.signupinputbox}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword} 
          onChangeText={setConfirmPassword}
        />
        <FontAwesome
          name={confirmPasswordVisible ? "eye-slash" : "eye"}
          size={20}
          color="#999"
          style={styles.eyeIconii}
          onPress={handleConfirmPasswordVisibility}
        />
      </View>

      <View style={styles.agreebox}>
      <TouchableOpacity
        
        onPress={() => setIsChecked(!isChecked)}
      >
        <Text
          style={[styles.checkbox,{backgroundColor: isChecked ? '#fff' : '#fff'},]} 
        >
          {isChecked && <FontAwesome name="check" size={24} color="green" />}
        </Text>
      </TouchableOpacity>
        <Text style={styles.termsText}>By signing up, I accept Terms & Conditions and {"\n"}privacy policy
        </Text>
        </View>
      <Button
        title="Register"
        buttonStyle={styles.registerButton}
        textStyle={styles.loginButtonText} onPress={handleRegister}
      />

      <Text style={styles.footerTextii}>
        Already have an account?
        <Text onPress={() => navigationi.navigate('LoginScreen')} style={styles.linkText}> Login</Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
