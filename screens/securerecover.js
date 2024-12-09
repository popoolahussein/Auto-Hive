import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Button from '../auth/button';
import { useNavigation } from '@react-navigation/native';

function securerecover() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.srlogo} />
      <Text style={styles.srtext}>
      Let’s set your{"\n"} recovery/security question
      </Text>
      <View>
        <View style={styles.srinputboxi}>
          <Text style={styles.srque}>What city did you grow up in?</Text>
          <Image source={require('../assets/secure.png')} style={styles.sriarrow} />
        </View>
        <View style={styles.srinputbox}>
        <TextInput
          style={styles.srinput}
          placeholder="Answer"
          placeholderTextColor={"#aaa"}
        />
        </View>
      </View>
      <Button
        title="SUBMIT"
        buttonStyle={styles.srButton}
        textStyle={styles.srButtonText} onPress={() => navigation.navigate('add')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 265,
  },
  srlogo: {
    width: 182,
    height: 41,
    alignSelf: 'center',
    marginTop: 47,
    marginBottom: 149,
  },
  srtext: {
    fontFamily: 'Lato-Regular',
    fontWeight: 500,
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 47,
  },
  srque: {
    fontFamily: 'Mulish-Regular',
    fontWeight: 400,
    fontSize: 15,
  },
  sriarrow: {
    width: 12,
    height: 6,
  },
  srinputboxi: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
    paddingRight: 28,
    justifyContent: 'space-between',
  },
  srinputbox: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
  },
  srButton: {
    height: 60,
    backgroundColor: '#2980B9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
  },
  srButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Muslih-Regular',
  },
});

export default securerecover
