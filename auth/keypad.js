import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path, ClipPath, Rect } from 'react-native-svg';

const BackspaceIcon = () => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_537_1812)">
      <Path
        d="M18.0005 3H8.4465C8.0065 3 7.3755 3.236 7.0445 3.525L0.248501 9.473C0.170792 9.53698 0.108211 9.61737 0.0652462 9.7084C0.0222817 9.79943 0 9.89884 0 9.9995C0 10.1002 0.0222817 10.1996 0.0652462 10.2906C0.108211 10.3816 0.170792 10.462 0.248501 10.526L7.0445 16.473C7.3755 16.762 8.0065 17 8.4465 17H18.0005C19.1005 17 20.0005 16.1 20.0005 15V5C20.0005 3.9 19.1005 3 18.0005 3ZM15.1915 14L12.6345 11.443L10.0785 14L8.6355 12.557L11.1915 10L8.6355 7.443L10.0785 6L12.6355 8.555L15.1905 6L16.6345 7.443L14.0785 10L16.6355 12.555L15.1915 14Z"
        fill="white"
      />
    </G>
    <ClipPath id="clip0_537_1812">
      <Rect
        width="20"
        height="20"
        fill="white"
        transform="matrix(-1 0 0 -1 20 20)"
      />
    </ClipPath>
  </Svg>
);

const Keypad = ({ onPress }) => {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace'];

  return (
    <View style={styles.keypadContainer}>
      {digits.map((key, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.key,
            styles[`key${key}`] || styles.defaultKey,
          ]}
          onPress={() => onPress(key)}
        >
          {key === 'backspace' ? (
            <BackspaceIcon />
          ) : (
            <Text style={styles.keyText}>{key}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    margin: 0,
    paddingLeft: 77,
    marginRight: 86,
   position: 'relative'
  },
  key: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  keyText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 26,
    fontWeight: 500,
    color: '#000',
    textAlign: 'center',
    justifySelf: 'center',
  },
  key1: {
    left: -30,
 },
  key2: {
    left: 75,
  },
  key3: {
    left: 170,
  },
  key4: {
    left: -30,
    bottom: -100,
  },
  key5: {
    left: 75,
    bottom: -100,
  },
  key6: {
    left: 170,
    bottom: -100,
  },
  key7: {
    left: -30,
    bottom: -190,
  },
  key8: {
    left: 75,
    bottom: -190,
  },
  key9: {
    left: 170,
    bottom: -190,
  },
  key0: {
    left: 75,
    bottom: -280,
  },
  keybackspace: {
    backgroundColor: '#2980B9',
    width: 50,
    height: 50,
    left: 145,
    bottom: -290,
    borderRadius: 30,
  },
  defaultKey: { backgroundColor: '#ddd' },
});

export default Keypad;
