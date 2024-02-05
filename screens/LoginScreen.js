import { View, Text, StyleSheet, TouchableOpacity ,Image, TextInput,ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import {FIREBASE_AUTH } from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';


export default function LoginScreen() {
  const [email,setEmail]=useState('');
  const [password,SetPassword]=useState('');
  const[loading,setLoading]=useState('false');
  const auth=FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async()=>{
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth,email,password);
      console.log(response);
      if (response.user) {
      Alert.alert("Login Successfully");
      navigation.navigate('Home');
      }
      else{
        throw new Error("Invalid Email or Password")
      }
    }
    catch(error){
     console.log(error);
     Alert.alert("Login Failed:","Wrong Email or Password");
    }
    finally{
      setLoading(false);
    }
  }

  
  return (
    <ScrollView style={styles.scrollViewContent}>
    <SafeAreaView  style={styles.container}>
    
    <View style={styles.logoCenter}>
      <Image  source={require("../assets/logo.png")} style={styles.logo}/>
    </View>
    <View style={styles.priCenter}>
      <Text style={styles.Pricewise}>PriceWise</Text>
    </View>
    <View style={styles.inp_div}>

      <TextInput value={email} style={styles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)}/>
      <TextInput  secureTextEntry={true} value={password} style={styles.input} placeholder="Password" onChangeText={(text)=>SetPassword(text)} />
    </View> 
    <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <View style={styles.already} >
      <Text style={styles.alreadyText}>Don't have an account?<Text onPress={()=>navigation.navigate("Signup")} style={styles.signup}> Signup</Text></Text>
      
    </View>
   
    </SafeAreaView>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F1D093",
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:280
  },
  scrollViewContent: {
    flexGrow: 1,
    },
inp_div:{
  marginTop:60
},
 button:{
  backgroundColor:"#FF714D",
   padding:8,
   borderRadius:5,
   alignItems:'center',
   marginTop:20
  },

  already:{
    marginTop:15
  },
  alreadyText:{
    fontSize:15,
    marginLeft:55
  },

  signup:{
    color:"#FF714D",
    fontSize:15
  },

  buttonText:{
    fontSize:22,
    color:"#FFE29A"
  },
  logo:{
   height:100,
   width:75,
   resizeMode:"cover",  
  },

  logoCenter:{ 
    
    alignItems:"center",
    marginTop:80,
  },

  Pricewise:{
    fontSize:20,
    marginBottom:95,
    color:"#000000",
    fontFamily:"KaushanScript-Regular",
  },
  priCenter:{
    alignItems:"center",

  },
  input:{
    height: 40,
    borderColor: 'gray',
    backgroundColor:"#fff",
    borderWidth: 0.7,
    borderRadius:5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    opacity:0.5
  }

});