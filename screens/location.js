import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function location() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
        <Image width={28} height={28} source={require("../assets/back.png")}  />
        </TouchableOpacity>
        <Text style={styles.carname}>Lexus RX350</Text>
      </View>
      <View>
        <Image style={styles.boardmap} source={require("../assets/boardmap.png")} />
      </View>
      <View style={styles.foot}>
        <Text style={styles.foottext}>Current Location</Text>
        <View style={styles.details}>
        <Image style={styles.fi}  source={require("../assets/locationii.png")}  />
        <Text style={styles.di}>Road no 4, Sector 9, Utako, Abuja, Nigeria</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.details}>
        <Image width={24} height={20.65} source={require("../assets/view.png")}  />
        <Text style={styles.dii}>View History</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
    },
    top: {
        backgroundColor: '#2980B9',
        width: '100%',
        height: 82,
        resizeMode: 'cover',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },
    carname: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        color: '#fff',
    },
    boardmap: {
        width: '100%',
        height: 516,
        resizeMode: 'cover',
    },
    foot: {
        backgroundColor: '#2980B9',
        height: 277,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 19.79,
        paddingLeft: 30,
    },
    foottext: {
        fontSize: 20,
        fontWeight: 400,
        fontFamily: 'Lato-Regular',
        color: '#F2F2F2',
        marginBottom: 32.69,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    fi: {
        width: 24,
        height: 20.65,
    },
    di: {
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        color: '#F2F2F2',
    },
    dii: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'JosefinSans-Regular',
        textAlign: 'center',
        color: '#F5F5F5',
    },
    hr: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, .21)',
        marginVertical: 20.65,
        alignSelf: 'center',
        width: '70%'
    },
});

export default location
