import { View, Text,StyleSheet,ScrollView,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'

export default function AllEarphones() {
  const  navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/allearphones.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.tele1_teles} onPress={()=>navigation.navigate("Ears1")}>
       
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
         height:1400
        },
  tele1_teles:{
          position:"absolute",
          width:170,
          height:125,
        //   backgroundColor:"white",
          marginTop:110,
          marginLeft:22
        },
       
})