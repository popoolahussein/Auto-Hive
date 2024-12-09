import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileHamburger = ({ user, title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('profile', { user })}>
      <Image
          source={
            user.image
              ? { uri: user.image }
              : require('../assets/defaultProfile.png')
          }
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.name}>
        {user.firstName}{"\n"}<Text style={styles.title}>{title}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 47.63,
    height: 47.63,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#2980B9',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Mulish-Regular',
    fontWeight: 400,
    fontSize: 10,
    color: '#7B7F9E',
  }
});

export default ProfileHamburger;
