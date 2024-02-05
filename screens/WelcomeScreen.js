import { View, Text, StyleSheet, TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView  style={styles.container}>
    <View style={styles.logoCenter}>
      <Image  source={require("../assets/logo.png")} style={styles.logo}/>
    </View>
    <View style={styles.priCenter}>
      <Text style={styles.Pricewise}>PriceWise</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.buttonText}>GET STARTED</Text>
    </TouchableOpacity>
   
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F1D093",
    paddingLeft:50,
    paddingRight:50,
    
  },

 button:{
  backgroundColor:"#FF714D",
   padding:8,
   borderRadius:5,
   alignItems:'center',
   marginBottom:40,
  },

  buttonText:{
    fontSize:22,
    color:"#FFE29A"
  },
  logo:{
   height:200,
   width:150,
   resizeMode:"cover",
   marginTop:80,  
  },

  logoCenter:{ 
    flex:1,
    alignItems:"center",
    marginTop:80,
  },

  Pricewise:{
    fontSize:20,
    marginBottom:170,
    color:"#000000",
    fontSize:26,
    fontFamily:"KaushanScript-Regular",
  },
  priCenter:{
    alignItems:"center",

  }

});