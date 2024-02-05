import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'
import OfferScreen from "./OfferScreen";
import {SafeAreaView } from 'react-native-safe-area-context'


export default function HomeScreen()  {

  const navigation=useNavigation();
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/homescreen1.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.btn1_home} onPress={()=>navigation.navigate("OnePlus")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn2_home} onPress={()=>navigation.navigate("Samsung")}>
       
    </TouchableOpacity>

      </SafeAreaView>
    </ScrollView>
    

  )}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F1D093",
    // paddingBottom:800
  },
  btn1_home:{
    position:"absolute",
       width:120,
       height:120,
      //  backgroundColor:"white",
       marginTop:560,
       marginLeft:10
  },
  btn2_home:{
    position:"absolute",
    width:115,
    height:110,
    // backgroundColor:"white",
    marginTop:560,
    marginLeft:145
  },
  homescreen:{
  //  objectFit:"cover",
   width:"100%",
   height:803
  },
  scrollViewContent: {
    flexGrow: 1,
    },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
    backgroundColor: '#eee',
  },
  notificationIcon: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
});
