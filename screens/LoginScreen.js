import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../auth/styles';
import Button from '../auth/button';

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.logintitle}>Welcome back!</Text>
      <Text style={styles.loginsubtitle}>Login</Text>

      <Image
        source={require('../assets/bro.png')}
        style={styles.broimage}
      />
      <View style={styles.divider} />
      <View style={styles.socialButtons}>
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

      <Text style={styles.orText}>Or</Text>

      <View style={styles.emailbox}>
        <Text style={styles.emailhead}>Email</Text>
        <TextInput
          style={styles.email}
          placeholder="deni.dudar@gmail.com"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
        />
      </View>

      <View style={styles.passwordbox}>
        <TextInput
          style={styles.password}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <FontAwesome
            name={passwordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#999"
            style={styles.eyeIcon}
            onPress={handlePasswordVisibility}
          />
        </TouchableOpacity>
      </View>

      <Button
        title="Login"
        buttonStyle={styles.loginButton}
        textStyle={styles.loginButtonText}
        onPress={() => navigation.navigate('Home')}
      />

      
     <TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={() => navigation.navigate('resetpassScreen')}>Forgot password?</Text>
      </TouchableOpacity>


      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={() => navigation.navigate('SignUpScreen')} style={styles.linkText}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
