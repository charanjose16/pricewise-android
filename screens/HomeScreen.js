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
      <Image  source={require("../assets/homescreen.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.btn1_home} onPress={()=>navigation.navigate("OnePlus")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn2_home} onPress={()=>navigation.navigate("Samsung")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.cat_btn_home} onPress={()=>navigation.navigate("Category")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.viewall_btn_home} onPress={()=>navigation.navigate("AllMobiles")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.mobile_btn_home} onPress={()=>navigation.navigate("AllMobiles")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.tele_btn_home} onPress={()=>navigation.navigate("AllTele")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.lap_btn_home} onPress={()=>navigation.navigate("AllLap")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.deals_btn_home} onPress={()=>navigation.navigate("AllDeals")}>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.ears_btn_home} onPress={()=>navigation.navigate("AllEars")}>
       
       </TouchableOpacity>

       <TouchableOpacity style={styles.notification_home} onPress={()=>navigation.navigate("notifications")}>
       
       </TouchableOpacity>
       <TouchableOpacity style={styles.search_home} onPress={()=>navigation.navigate("search")}>
       
       </TouchableOpacity>
       <TouchableOpacity style={styles.recent_home} onPress={()=>navigation.navigate("recent")}>
       
       </TouchableOpacity>
       {/* <TouchableOpacity style={styles.nav_home} onPress={()=>navigation.navigate("nav")}>
       
       </TouchableOpacity> */}

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
  cat_btn_home:{
    position:"absolute",
    width:50,
    height:50,
    // backgroundColor:"white",
    marginTop:825,
    marginLeft:100
  },
  recent_home:{
    position:"absolute",
    width:50,
    height:50,
    // backgroundColor:"white",
    marginTop:825,
    marginLeft:250
  },
  viewall_btn_home:{
    position:"absolute",
    width:140,
    height:40,
    // backgroundColor:"white",
    marginTop:510,
    marginLeft:260
  },
  mobile_btn_home:{
    position:"absolute",
    width:60,
    height:105,
    // backgroundColor:"white",
    marginTop:270,
    marginLeft:240
  },
  tele_btn_home:{
    position:"absolute",
    width:90,
    height:105,
    // backgroundColor:"white",
    marginTop:270,
    marginLeft:110
  },
  lap_btn_home:{
    position:"absolute",
    width:90,
    height:105,
    // backgroundColor:"white",
    marginTop:270,
    marginLeft:325
  },
  deals_btn_home:{
    position:"absolute",
    width:90,
    height:101,
    // backgroundColor:"white",
    marginTop:270,
    marginLeft:11
  },
  ears_btn_home:{
      position:"absolute",
      width:90,
      height:101,
      // backgroundColor:"white",
      marginTop:350,
      marginLeft:11
  },
  notification_home:{
    position:"absolute",
    width:35,
    height:35,
    // backgroundColor:"white",
    marginTop:15,
    marginLeft:320
  },
  nav_home:{
    position:"absolute",
    width:35,
    height:35,
    // backgroundColor:"white",
    marginTop:15,
    marginLeft:8
  },
  search_home:{
    position:"absolute",
    width:35,
    height:35,
    // backgroundColor:"white",
    marginTop:15,
    marginLeft:361
  },
  homescreen:{
  //  objectFit:"cover",
   width:"100%",
   height:880
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
