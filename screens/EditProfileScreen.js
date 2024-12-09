import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Button from '../auth/button';

const EditProfileScreen = ({ navigation, route }) => {
  const { user = {}, updateUser } = route.params || {};

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [image, setImage] = useState(user.image || null);
  const [phone, setPhone] = useState(user.phone || ''); // Added phone number state

  // Function to pick an image
  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSave = () => {
    const updatedUser = {
      firstName,
      lastName,
      email,
      image,
      phone,
    };

    if (updateUser) {
      updateUser(updatedUser);
    }
    navigation.goBack();
  };

  const navigations = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigations.navigate('profile')}>
          <Image source={require('../assets/back-arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <TouchableOpacity onPress={handleImagePick}>
        <View style={styles.imagebox}>
        <Image
          source={
            image
              ? { uri: image }
              : require('../assets/null.png') // Use default image if no image is selected
          }
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
     <View>
      <View style={styles.emailboxii}>
        <Text style={styles.emailhead}>First name</Text>
        <TextInput
          style={styles.email}
          placeholder="Korede"
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
       <View style={styles.emailboxii}>
        <Text style={styles.emailhead}>Last name</Text>
        <TextInput
          style={styles.email}
          placeholder="Alli"
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
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
        <TextInput 
          style={styles.phoneInput} placeholder="Phone number" keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        </View>
      </View>
     </View>
      <Button
        title="Save Changes"
        buttonStyle={styles.savebtn}
        textStyle={styles.btntext}
        onPress={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 28,
    marginTop: 37,
    marginBottom: 41.37,
  },
  headerTitle: {
    fontFamily: 'Lato-Regular',
    color: '#979797',
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 79.37,
  },
  backIcon: {
    width: 47.63,
    height: 47.63,
    resizeMode: 'contain',
  },
  image: {
    width: 165.01,
    height: 153.59,
  },
  imagebox: {
    width: 176.59,
    height: 164.37,
    borderRadius: 30,
    paddingVertical: 5.39,
    paddingHorizontal: 5.79,
    borderColor: 'rgba(41, 128, 185, 1)',
    alignSelf: 'center',
    marginBottom: 85.63,
  },
  inputbox: {
    marginTop: 85.63,
    marginBottom: 68,
  },
  signupinputbox: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 16,
    marginLeft: 20,
    marginRight: 26.49,
    marginBottom: 15,
  },
  emailboxii: {
    borderWidth: 1,
    borderColor: '#aaa',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 26.49,
    marginBottom: 20,
    paddingLeft: 16,
  },
  emailhead: {
    fontFamily: 'Mulish-Regular',
    color: '#aaa',
    fontWeight: 400,
    fontSize: 13,
  },
  email: {
    width: 261,
    fontFamily: 'Lato-Regular',
    fontWeight: 400,
    fontSize: 15,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 26.49,
    flex: 1,
    position: 'relative',
    gap: 8,
  },
  countryCode: {
    height: 50,
    fontSize: 13,
    color: '#333',
    borderWidth: 1,
    borderColor: '#aaa',
    textAlign: 'center',
    borderRadius: 10,
    width: 84,
  },
  phoneInput: {
    fontSize: 13,
    color: '#333',
    width: 187.57,
    height: 21,
  },
  phoneInputbox: {
    width: 'fit-content',
    flex: 1,
    paddingLeft: 11.5,
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
  },
  savebtn: {
    height: 60,
    marginLeft: 27,
    marginRight: 19.49,
    marginTop: 68,
    marginBottom: 48,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#2980B9',
  },
  btntext: {
    fontFamily: 'Mulish-Regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default EditProfileScreen;
