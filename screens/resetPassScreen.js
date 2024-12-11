import React from 'react'
import { TextInput, Text, View } from 'react-native';
import ProfileHamburger from '../auth/ProfileHamburger'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../auth/styles';
import Button from '../auth/button';
import { useNavigation } from '@react-navigation/native';

function resetPassScreen() {
  const navigation = useNavigation();
    
  return (
    <KeyboardAwareScrollView style={styles.container}>
        <ProfileHamburger title="Welcome" style={styles.rpph} />

        <View>
            <Text style={styles.rptopic}>Reset your Password</Text>
            <Text style={styles.rpsubtopic}>Enter your email and we’ll be in touch to{'\n'} reset your password.</Text>
        </View>
        <View style={styles.rpemailbox}>
        <Text style={styles.emailhead}>Email</Text>
        <TextInput
          style={styles.email}
          placeholder="deni.dudar@gmail.com"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
        />
      </View>
      <Button
        title="Submit"
        buttonStyle={styles.rpButton}
        textStyle={styles.loginButtonText} onPress={() => navigation.navigate('OTPEntryScreen')}
      />

    </KeyboardAwareScrollView>
  )
}

export default resetPassScreen
