import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../auth/button';
import { useNavigation } from '@react-navigation/native';

function scan() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
            <Text style={styles.scantitle}>Scan QR code</Text>
        </View>
        <View style={styles.scan}>
            <Image source={require('../assets/scan.png')} />
        </View>
        <View>
            <Text style={styles.orText}>Or</Text>
        </View>
        <View>
            <Text style={styles.manualadd}>Manually add device</Text>
        </View>
        <View style={styles.inputbox}>
        <View style={styles.adDinputbox}>
            <TextInput
                style={styles.srquei}
                placeholder="Vehicle Identification Number"
                placeholderTextColor={"#aaa"}    
            />
        </View>
        <View style={styles.adDinputbox}>
            <TextInput
                style={styles.srquei}
                placeholder="Vehicle Identification Number"
                placeholderTextColor={"#aaa"}    
            />
        </View>
        </View>
        <View style={styles.lowernavBtn}>
            <Button
                title="Previous"
                buttonStyle={styles.skipButton}
                textStyle={styles.skipButtonText}
                imageStyles={styles.imageStyle}
                onPress={() => navigation.navigate('CreatePINScreen')}
                imageSource={require('../assets/chevrons-right.png')}
            />
            <Button
                title="Next"
                buttonStyle={styles.skipButton}
                textStyle={styles.skipButtonTexti}
                imageStyles={styles.imageStylei}
                onPress={() => navigation.navigate('CreatePINScreen')}
                imageSource={require('../assets/chevrons-right.png')}
            />
            </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 140,
        marginBottom: 25,
    },
    scantitle: {
        fontFamily: 'Lato-Regular',
        fontWeight: 500,
        fontSize: 24,
        marginBottom: 14,
        textAlign: 'center',
    },
    scan: {
        alignItems: 'center',
    },
    orText: {
        fontFamily: 'Mulish-Regular',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 400,
        color: '#aaa',
        marginTop: 38,
        marginBottom: 27,
      },
      manualadd: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 500,
        color: '#000',
        marginBottom: 20,
      },
      inputbox: {
        flex: 1,
        flexDirection: 'column',
        gap: 12,
        marginHorizontal: 24,
      },
      adDinputbox: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 16,
        
      },
      srquei: {
        width: 261,
        height: 21,
        fontFamily: 'Mulish-Regular',
        fontWeight: 400,
        fontSize: 13,
      },
      lowernavBtn: {
        justifyContent: 'space-between',
        marginTop: 269,
        marginHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
      },
      skipButton: {
        width: 102,
        height: 40,
        justifySelf: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: '#2980B9',
        borderRadius: 5,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
      },
      skipButtonText: {
        fontFamily: 'Lato-Regular',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        marginTop: -3,
        marginRight: -68,
      },
      skipButtonTexti: {
        fontFamily: 'Lato-Regular',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        marginLeft: 30,
        marginTop: -3,
      },
      imageStyle: {
        position: 'relative',
        width: 28,
        height: 28,
        marginLeft: 20,
        rotate: '180deg',
        left: -35,
      },
      imageStylei: {
        position: 'relative',
        width: 28,
        height: 28,
        marginLeft: 10,
      },
});

export default scan
