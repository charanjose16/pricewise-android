import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView } from 'react-native-safe-area-context'

export default function Recent() {
    const navigation=useNavigation();
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/recent.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.mob1_recent} onPress={()=>navigation.navigate("OnePlus")}>
       
    </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#F1D093",
    //   paddingBottom:800
    },
    homescreen:{
         objectFit:"cover",
         width:"100%",
         height:805
        },
        mob1_recent:{
            position:"absolute",
            width:360,
            height:115,
            // backgroundColor:"white",
            marginTop:90,
            marginLeft:25
          },
})