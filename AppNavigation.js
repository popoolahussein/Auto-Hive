// AppNavigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationOptions from './auth/navigationOptions';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import OnboardingPage from './screens/onboarding';
import OnboardingPageii from './screens/onboardingii';
import Home from './screens/home';
import profile from './screens/profile';
import EditProfileScreen from './screens/EditProfileScreen';
import OTPEntryScreen from './screens/OTPEntryScreen';
import CreatePINScreen from './screens/CreatePINScreen';
import resetPassScreen from './screens/resetPassScreen';
import verificationLink from './screens/verificationLink';
import pin from './screens/pin';
import securerecover from './screens/securerecover';
import add from './screens/add';
import addDetails from './screens/addDetails';
import scan from './screens/scan';
import success from './screens/success';
import location from './screens/location';
import menu from './screens/menu';
import NotificationScreen from './screens/NotificationScreen';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
          initialRouteName="onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="onboarding" component={OnboardingPage} options={navigationOptions} />
          <Stack.Screen name="onboardingii" component={OnboardingPageii} options={navigationOptions} />
          <Stack.Screen name="profile" component={profile} options={navigationOptions} />
          <Stack.Screen name="Home" component={Home} options={navigationOptions} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="OTPEntryScreen" component={OTPEntryScreen} />
          <Stack.Screen name="CreatePINScreen" component={CreatePINScreen} />
          <Stack.Screen name="resetpassScreen" component={resetPassScreen} />
          <Stack.Screen name="verificationLink" component={verificationLink} />
          <Stack.Screen name="pin" component={pin} />
          <Stack.Screen name="securerecover" component={securerecover} />
          <Stack.Screen name="add" component={add} />
          <Stack.Screen name="addDetails" component={addDetails} />
          <Stack.Screen name="scan" component={scan} />
          <Stack.Screen name="success" component={success} />
          <Stack.Screen name="location" component={location} />
          <Stack.Screen name="menu" component={menu} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        </Stack.Navigator>
  );
};

export default AppNavigation;
