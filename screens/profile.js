import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../auth/button';

const profile = ({ navigation, route }) => {
  const user = route?.params?.user || {};
  const navigations = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigations.navigate('Home')}>
          <Image source={require('../assets/back-arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.imagebox} >
      <Image 
        source={require("../assets/profile.png")}
        style={styles.image} 
      />
      </View>
      <View>
        <Text style={styles.title}>Your Info</Text>
      </View>
      <View style={styles.infobox}>
      <View style={styles.name}>
      <Text style={styles.text}>First Name{"\n"}<Text style={styles.textinfo}>{user.firstName || 'Korede'}</Text></Text>
      <Text style={styles.text}>Last Name{"\n"}<Text style={styles.textinfo}>{user.lastName || 'Alli'}</Text></Text>
      </View>
      <Text style={styles.text}>Email{"\n"}<Text style={styles.textinfo}>{user.email || 'ali.thakib@gmail.com'}</Text></Text>
      <Text style={styles.text}>Phone Number{"\n"}<Text style={styles.textinfo}>{user.phoneNumber || '+234-80xxxxxxxx'}</Text></Text>
      <Text style={styles.text}>No. of Cars{"\n"}<Text style={styles.textinfo}>{user.cars || '2'}</Text></Text>
      <Text style={styles.text}>Date Registered{"\n"}<Text style={styles.textinfo}>{user.date || '22/01/2022'}</Text></Text>
      </View>
      <Button
        title="Edit Profile"
        buttonStyle={styles.profilebtn}
        textStyle={styles.btntext}
        onPress={() => navigation.navigate('EditProfile')}
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
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    fontWeight: 900,
    color: '#2980B9',
    marginLeft: 40,
    marginTop: 49.63,
    marginBottom: 32.32,
  },
  infobox: {
    marginLeft: 37,
    marginRight: 51.49,
    gap: 16,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Mulish-Regular',
    fontWeight: 400,
    color: '#7F8489',
    fontSize: 15,
  },
  textinfo: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    fontWeight: 900,
    color: '#000',
  },
  profilebtn: {
    height: 60,
    marginLeft: 27,
    marginRight: 19.49,
    marginBottom: 48,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#2980B9',
    marginTop: 37,
    marginBottom: 48,
  },
  btntext: {
    fontFamily: 'Mulish-Regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default profile;
