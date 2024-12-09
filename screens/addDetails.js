import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ProfileHamburger from '../auth/ProfileHamburger';
import Button from '../auth/button';


function addDetails() {
    const user = {
        firstName: 'Korede',
    };
  return (
    <KeyboardAwareScrollView>
        <View style={styles.container}>
            <View style={styles.addph}>
              <ProfileHamburger user={user} title="Welcome" />
            </View>
            <View>
                <Text style={styles.adDtitle}>First, Let’s get some of{"\n"} details</Text>
            </View>
            <View style={styles.inputsect}>
                <View style={styles.adDinputbox}>
                <TextInput
                    style={styles.input}
                    placeholder="Car Name (e.g. My camry, Santa, RX350)"
                    placeholderTextColor={"#aaa"}
                />
                </View>
                <View style={styles.adDinputboxii}>
                <View style={styles.adinputboxi}>
                    <TextInput
                    placeholder='Brand'
                    placeholderTextColor={"#aaa"}
                    style={styles.srque} />
                    <Image source={require('../assets/secure.png')} style={styles.sriarrow} />
                </View>
                <View style={styles.adinputboxi}>
                    <TextInput
                     placeholder='Type'
                     placeholderTextColor={"#aaa"}
                     style={styles.srque}
                    />
                    <Image source={require('../assets/secure.png')} style={styles.sriarrow} />
                </View>
                </View>
                <View style={styles.adDinputbox}>
                <TextInput
                    style={styles.srquei}
                    placeholder="Vehicle Identification Number"
                    placeholderTextColor={"#aaa"}
                />
                </View>
                <View style={styles.emailboxii}>
                    <Text style={styles.emailhead}>Registration Number</Text>
                    <TextInput
                    style={styles.regnum}
                    placeholder="XXXXXXX"
                    placeholderTextColor={'rgba(0, 0, 0, 1)'}
                    />
                </View>
                <View style={styles.adDinputbox}>
                <TextInput
                    style={styles.srquei}
                    placeholder="Engine Number"
                    placeholderTextColor={"#aaa"}
                />
                </View>
                <View style={styles.srinputboxi}>
                    <TextInput
                        style={styles.srquei} 
                        placeholder="Pick a color"
                        placeholderTextColor={"#aaa"}
                    />
                    <Image source={require('../assets/secure.png')} style={styles.sriarrow} />
                </View>
                <View style={styles.srinputboxi}>
                    <TextInput 
                        style={styles.srquei} 
                        placeholder="Pick the image most similar to your car"
                        placeholderTextColor={"#aaa"}
                    />
                    <Image source={require('../assets/secure.png')} style={styles.sriarrow} />
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
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 45,
        marginBottom: 34,
    },
    addph: {
        marginLeft: 28,
    },
    adDtitle: {
        textAlign: 'center',
        fontFamily: 'JosefinSans-Regular',
        fontWeight: 500,
        fontSize: 26,
        marginTop: 49.37,
        marginBottom: 20,
    },
    srque: {
        width: 47,
        height: 21,
        fontFamily: 'Mulish-Regular',
        fontWeight: 400,
        fontSize: 13,
    },
    adDinputbox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 16,
      },
      adDinputboxii: {
        flexDirection: 'row',
        gap: 17,
        flex: 1,
      },
      adinputboxi: {
        height: 50,
        width: '47.5%',
        borderWidth: 1,
        borderColor: '#aaa',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 9,
        justifyContent: 'space-between',
      },
      inputsect: {
        flex: 1,
        marginHorizontal: 24,
        gap: 25,
      },
      emailboxii: {
        borderWidth: 1,
        borderColor: '#aaa',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 16,
      },
      emailhead: {
        fontFamily: 'Mulish-Regular',
        color: '#aaa',
        margin: '0',
        padding: '0',
        fontSize: 13,
      },
      regnum: {
        fontFamily: 'Mulish-Regular',
        color: '#000',
        fontSize: 15,
        fontWeight: 400,
        width: 261,
      },
      srinputboxi: {
        height: 50,
        borderWidth: 1,
        borderColor: '#aaa',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 28,
        justifyContent: 'space-between',
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
        marginTop: 25,
        marginHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
      },
      skipButton: {
        width: 102,
        // padding: 15,
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
        marginRight: -68,
      },
      skipButtonTexti: {
        fontFamily: 'Lato-Regular',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        marginLeft: 30,
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

export default addDetails