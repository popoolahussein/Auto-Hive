import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import ProfileHamburger from '../auth/ProfileHamburger';

function add() {
    const user = {
        firstName: 'Korede',
    };
  return (
        <View style={styles.container}>
            <View style={styles.addph}>
              <ProfileHamburger user={user} title="Welcome" />
            </View>
            <View>
                <Text style={styles.addtitle}>No previous car{"\n"} records found</Text>
            </View>
            <View>
                <Image
                    source={require('../assets/amico.png')}
                    style={styles.amico}
                />
            </View>
            <View>
                <Text style={styles.addtextii}>Let’s Add one.</Text>
            </View>
            <TouchableOpacity>
            <Image
                    source={require('../assets/addbtn.png')}
                    style={styles.addbtn}
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.addtextiii}>You can add more later on in{"\n"} settings. </Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 47,
        marginBottom: 91,
    },
    addph: {
        marginLeft: 28,
    },
    addtitle: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontWeight: 500,
        fontSize: 26,
        marginTop: 49.37,
        marginBottom: 20,
    },
    amico: {
        width: 260,
        height: 241.4,
        alignSelf: 'center'
    },
    addtextii: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontWeight: 500,
        fontSize: 26,
        color: '#000',
        marginTop: 51.6,
        marginBottom: 27,
    },
    addbtn: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    addtextiii: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontWeight: 400,
        fontSize: 18,
        color: '#000',
        marginTop: 26,
    },
});

export default add