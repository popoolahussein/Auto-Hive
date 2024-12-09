import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import ProfileHamburger from '../auth/ProfileHamburger';
import Button from '../auth/button';
import { useNavigation } from '@react-navigation/native';

function success() {
  const navigation = useNavigation();
    const user = {
        firstName: 'Korede',
      };
  return (
    <View style={styles.container}>
        <ProfileHamburger user={user} title="Welcome" style={styles.rpph} />

        <View>
            <Image style={styles.successimg} source={require("../assets/success.png")} />
        </View>
        <View style={styles.rpemailbox}>
        <Text style={styles.successtext}>Congratulations, you{"\n"} have successfully{"\n"} secured Lexus{"\n"} RX350</Text>
        </View>
        <Button
                title="Next"
                buttonStyle={styles.skipButton}
                textStyle={styles.skipButtonTexti}
                imageStyles={styles.imageStylei}
                onPress={() => navigation.navigate('CreatePINScreen')}
                imageSource={require('../assets/chevrons-right.png')}
            />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 38,
        marginBottom: 30,
    },
    rpph: {
        marginLeft: 26,
    },
    successimg: {
        width: 159,
        height: 154,
        alignSelf: 'center',
        marginTop: 109.37,
        marginBottom: 57,
    },
    successtext: {
        fontFamily: 'Lato-Regular',
        fontWeight: 500,
        fontSize: 26,
        textAlign: 'center',
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
        marginTop: 211,
        marginRight: 29,
      },
      skipButtonTexti: {
        fontFamily: 'Lato-Regular',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        marginLeft: 30,
        marginTop: -3,
      },
      imageStylei: {
        position: 'relative',
        width: 28,
        height: 28,
        marginLeft: 10,
      },
});

export default success
