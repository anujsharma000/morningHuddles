import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TeamsImage from '../assets/microsoft_teams.png';

const Home = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerHeader}>
        <Text>Today's schedule</Text>
        <View style={styles.meetingContainer}>
          <Text style={{color:'#171A21', fontSize:13, fontWeight:'700'}}>4</Text>
        </View>
        <Pressable style={{borderBottomWidth:1,borderBottomColor:'black',}}>
          <Text>View all</Text>
        </Pressable>
      </View>
    {/* card innner setting  */}

    <View style={styles.innerHeaderSecond}>
        <View>
          <Text style={{fontSize: 24, fontWeight:'bold',color:'black'}}>9:30</Text>
          <Text style={{fontSize: 15, fontWeight:'600',color:'black'}}>10:30</Text>
        </View>
        
        <View style={{width:4,height:42,borderRadius:8,backgroundColor:"#5DACF0"}}/>

       
        <View>
            <Text>Daily Standup Meeting</Text>
            <Text>Morning huddle</Text>
        </View>
        <View>
            <Image style={{width:40, height:36}} source={TeamsImage}/>
       </View>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: 328,
    padding: 16,
    paddingVertical: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    borderRadius: 16,
  },
  innerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meetingContainer: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    marginRight: 70,
    backgroundColor: '#EEEEEF',
  },
  innerHeaderSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
