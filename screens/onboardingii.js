import React from 'react';
import { View, Text, Image,ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../auth/button';
import styles from '../auth/styles';

const OnboardingPageii = () => {
    const navigation = useNavigation();  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={[styles.slide, { width: screenWidth }, { height: screenHeight }]}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.imagei}
        />
        <Text style={styles.texti}>On-The-Go{"\n"}Tracking</Text>

        <Image
          source={require('../assets/illustrator-img.png')}
          style={styles.imageii}
        />
        <Text style={styles.textii}>Track any of your cars from your {"\n"} device anywhere/anytime</Text>

        <View style={styles.userReq}>
        <Button
            title="Register"
            buttonStyle={styles.onboardingButton}
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate('SignUpScreen')}
        />
        <Button
           title="Login"
           buttonStyle={styles.onboardingButtonii}
           textStyle={styles.buttonTextii}
           onPress={() => navigation.navigate('LoginScreen')}
        />
        </View>
        
      </View>
    </ScrollView>
  );
};

export default OnboardingPageii;
