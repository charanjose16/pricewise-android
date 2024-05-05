import { View, Text,StyleSheet,ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView } from 'react-native-safe-area-context'

export default function Category() {
  const navigation=useNavigation();
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/category.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.cat_oneplus} onPress={()=>navigation.navigate("OnePlus")}>

    </TouchableOpacity>
    <TouchableOpacity style={styles.cat_samsung} onPress={()=>navigation.navigate("Samsung")}>

    </TouchableOpacity>
    <TouchableOpacity style={styles.cat_acer} onPress={()=>navigation.navigate("Lap1")}>

    </TouchableOpacity>
    <TouchableOpacity style={styles.cat_sony} onPress={()=>navigation.navigate("Ears1")}>

    </TouchableOpacity>
    <TouchableOpacity style={styles.cat_vizo} onPress={()=>navigation.navigate("Tele1")}>

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
         height:1150
        },
        cat_oneplus:{
          position:"absolute",
          width:90,
          height:100,
          // backgroundColor:"white",
          marginTop:150,
          marginLeft:35
        },
        cat_samsung:{
          position:"absolute",
          width:90,
          height:100,
          // backgroundColor:"white",
          marginTop:150,
          marginLeft:175
        },
        cat_acer:{
          position:"absolute",
          width:90,
          height:100,
          // backgroundColor:"white",
          marginTop:295,
          marginLeft:35
        },
        cat_sony:{
          position:"absolute",
          width:90,
          height:100,
          // backgroundColor:"white",
          marginTop:445,
          marginLeft:35
        },
        cat_vizo:{
          position:"absolute",
          width:90,
          height:100,
          // backgroundColor:"white",
          marginTop:590,
          marginLeft:35
        }
})