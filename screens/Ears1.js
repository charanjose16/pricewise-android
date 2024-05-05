import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'

export default function Ears1() {
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
      <View>
      <Image  source={require("../assets/ears1.jpg")}  style={styles.homescreen}/>
    </View>
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
         height:1800
        },
})