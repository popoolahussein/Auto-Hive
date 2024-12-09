import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const initialNotifications = [
  { id: '1', type: 'SOS initiated', icon: require('../assets/bell.png'), hasStatus: true },
  { id: '2', type: 'SOS un-initiated', icon: require('../assets/bell.png'), hasStatus: true },
  { id: '3', type: 'SOS initiated', icon: require('../assets/bell.png'), hasStatus: false },
  { id: '4', type: 'New Update Available', icon: require('../assets/download.png'), hasStatus: false },
  { id: '5', type: 'SOS initiated', icon: require('../assets/bell.png'), hasStatus: false },
  { id: '6', type: 'New Update Available', icon: require('../assets/download.png'), hasStatus: false },
];

export default function NotificationScreen() {
    const navigation = useNavigation();
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleStatus = (id) => {
    const updatedNotifications = notifications.map((item) =>
      item.id === id ? { ...item, hasStatus: !item.hasStatus } : item
    );
    setNotifications(updatedNotifications);
  };

  const renderItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const isHighlighted = item.hasStatus;
    return (
      <TouchableOpacity
        onPress={() => toggleStatus(item.id)}
        style={[
          styles.notificationItem,
          isHighlighted && (isEven ? styles.evenHighlightedItem : styles.oddHighlightedItem),
        ]}
      >
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.notificationText}>{item.type}</Text>
        {item.hasStatus && <View style={styles.statusDot} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/back-arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: {
    color: '#2980B9',
    fontSize: 24,
    fontWeight: 400,
    marginLeft: 11,
  },
  backIcon: {
    width: 47.63,
    height: 47.63,
    resizeMode: 'contain',
  },
  list: {
    padding: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(216, 221, 239, 1)',
  },
  evenHighlightedItem: {
    backgroundColor: '#d6eaf8',
    borderBottomColor: 'rgba(41, 128, 185, 1)',
  },
  oddHighlightedItem: {
    backgroundColor: '#d6eaf8',
    borderBottomColor: 'rgba(39, 174, 96, 0.2)',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});
