import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileHamburger from '../auth/ProfileHamburger';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const user = {
    firstName: 'Korede',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileHamburger title="Welcome back!" />
        
        <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
        <Image source={require("../assets/notification.png")} style={styles.notify} size={24} />
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('menu')}>
          <Image source={require("../assets/Union.png")} style={styles.dots} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.lastUpdated}>
        Last Updated <Text style={styles.time}>15 sec</Text>
      </Text>

      <View style={styles.carSection}>
        <Image
          source={require('../assets/suv-a.png')}
          style={styles.carImage}
        />
        <View style={styles.carControls}>
          <TouchableOpacity>
            <Image source={require("../assets/arrow.png")} style={styles.arrowi} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require("../assets/arrow.png")} style={styles.arrowii} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.carCard}>
        <View style={styles.carInfo}>
          <Text style={styles.carName}>Lexus RX350</Text>
          <Text style={styles.carStatus}>Locked</Text>
        </View>
        <TouchableOpacity style={styles.lockButton} onPress={() => {}}>
          <MaterialCommunityIcons name="lock" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.stats}>
        <View style={styles.evenstats}>
        <TouchableOpacity style={styles.statBox}>
        <Text style={styles.statLabel}>Total distance</Text>
        <Image source={require("../assets/map.png")} style={styles.staticoni} />
          <Text style={styles.statValue}>17.8 KM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statBox}>
        <Text style={styles.statLabel}>Total battery</Text>
        <Image source={require("../assets/charging.png")} style={styles.staticoni} />
          <Text style={styles.statValue}>100%</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.oddstats}>
        <TouchableOpacity style={styles.statBox}>
        <Text style={styles.statLabel}>Speed</Text>
        <Image source={require("../assets/speed.png")} style={styles.staticoni} />
          <Text style={styles.statValue}>45 Km/h</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('location')}style={styles.statBox}>
        <Text style={styles.statLabel}>Location</Text>
        <Image source={require("../assets/location.png")} style={styles.staticonii} />
          <Text style={styles.statValue}>Ikeja, Lagos</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginButton: 10.92,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 25,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  notify: {
    width: 23,
    height: 24,
  },
  dots: {
    marginLeft: 16,
  },
  lastUpdated: {
    fontFamily: 'Mulish-Regular',
    fontWeight: 700,
    fontSize: 14,
    color: '#000',
    marginLeft: 91,
    marginBottom: 16,
  },
  time: {
    fontFamily: 'Mulish-Regular',
    fontWeight: 700,
    fontSize: 14,
    color: '#2980B9',
    marginLeft: 15.3,
  },
  carSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  carImage: {
    width: 230,
    height: 166,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 45,
    marginBottom: 22,
  },
  carControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 68,
  },
  arrowi: {
    width: 28,
    height: 28,
    rotate: '180deg',
  },
  arrowii: {
    width: 28,
    height: 28,
  },
  carCard: {
    height: 104,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 19,
    marginHorizontal: 25,
    backgroundColor: '#2980B9',
    borderRadius: 30,
    gap: 102,
  },
  carInfo: {
    flexDirection: 'column',
    gap: 5,
  },
  carName: {
    fontFamily: 'Mulish-Regular',
    fontSize: 18,
    color: '#fff',
    fontWeight: 700,
  },
  carStatus: {
    fontFamily: 'Lato-Regular',
    color: '#fff',
    fontWeight: 400,
    fontSize: 14,
  },
  lockButton: {
    backgroundColor: '#2980B9',
    borderRadius: 30,
    borderColor: '#D8DDEF',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  stats: {
  gap: 12,
  },
  evenstats: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25.36,
    gap: 20,
  },
  oddstats: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 34.69,
    gap: 11,
  },
  statBox: {
    
    width: '48%',
    borderColor: '#bcc',
    borderWidth: 0.93,
    borderRadius: 12,
    paddingVertical: 20.56,
    paddingLeft: 18.69,
    gap: 14.62,
    alignItems: 'flex-start',
  },
  statLabel: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: '#231F20',
    fontWeight: 700,
  },
  staticoni: {
    width: 26,
    height: 26,
  },
  staticonii: {
    width: 37,
    height: 41.01,
  },
  statValue: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: '#2980B9',
    fontWeight: 700,
  },
});

export default Home;
