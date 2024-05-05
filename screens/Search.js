import { View, Text,StyleSheet,ScrollView,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView } from 'react-native-safe-area-context'

export default function Search() {
    const navigation=useNavigation();
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/search.jpg")}  style={styles.homescreen}/>
    </View>
    <TouchableOpacity style={styles.mob_search} onPress={()=>navigation.navigate("AllMobiles")}>
       
    </TouchableOpacity>

    <TouchableOpacity style={styles.ears_search} onPress={()=>navigation.navigate("AllEars")}>
       
    </TouchableOpacity>

    <TouchableOpacity style={styles.laps_search} onPress={()=>navigation.navigate("AllLap")}>
       
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
        mob_search:{
            position:"absolute",
            width:380,
            height:30,
            // backgroundColor:"white",
            marginTop:100,
            marginLeft:11
          }, ears_search:{
            position:"absolute",
            width:380,
            height:30,
            // backgroundColor:"white",
            marginTop:134,
            marginLeft:11
          },
           laps_search:{
            position:"absolute",
            width:380,
            height:30,
            // backgroundColor:"white",
            marginTop:166,
            marginLeft:11
          },
})