import React from 'react';
import { Text, View, Image } from 'react-native';
import ProfileHamburger from '../auth/ProfileHamburger';
import styles from '../auth/styles';
import Button from '../auth/button';
import { useNavigation } from '@react-navigation/native';

function VerificationLink() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ProfileHamburger title="Welcome" style={styles.rpph} />
            <Image
                source={require('../assets/verfemail.png')}
                style={styles.verfimg}
            />
            <Text style={styles.verftext}>
                A verification link has been sent{"\n"} to your email with us. Please{"\n"} verify it’s you.
            </Text>
            <Button
                title="Skip"
                buttonStyle={styles.skipButton}
                textStyle={styles.skipButtonText}
                imageStyles={styles.imageStyle}
                onPress={() => navigation.navigate('CreatePINScreen')}
                imageSource={require('../assets/chevrons-right.png')}
            />
        </View>
    );
}

export default VerificationLink;
