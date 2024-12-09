import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function menu() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const data = ['Home',

  'Profile',
  
  'Settings',
  
  'Help',
  
  'Privacy Policy',
  
  'Terms & Conditions',
  
  'Logout'];

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => handlePress(index)}
    >
      <Text
        style={[
          styles.listItem,
          selectedIndex === index && styles.selectedItem,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="close" color="#fff" size={28} style={styles.close} />
        </TouchableOpacity>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  menubar: {
    backgroundColor: '#2980B9',
    height: 553,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 12,
  },
  close: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 39,
  },
  touchable: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    fontFamily: 'Lato-Regular',
    fontWeight: 400,
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  selectedItem: {
    fontFamily: 'Lato-Regular',
    fontWeight: 800,
    fontSize: 18,
    color: '#fff',
    paddingBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
});

export default menu;
