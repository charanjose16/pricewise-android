import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const [username, setUsername] = useState(''); // Add state for username
  const [phoneNumber, setPhoneNumber] = useState(''); // Add state for phone number
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert('Sign in completed');
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      Alert.alert('Sign up failed:');
      
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoCenter}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.priCenter}>
          <Text style={styles.Pricewise}>PriceWise</Text>
        </View>
        <View style={styles.input_div}>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        </View>

        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
        <View style={styles.already}>
          <Text style={styles.alreadyText}>Already have an account?<Text onPress={() => navigation.navigate("Login")} style={styles.signup}> Login</Text></Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1D093",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 120
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  button: {
    backgroundColor: "#FF714D",
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40
  },
  input_div:{
    marginTop:50
  },

  buttonText: {
    fontSize: 22,
    color: "#FFE29A"
  },
  logo: {
    height: 100,
    width: 75,
    resizeMode: "cover",
  },
  alreadyText: {
    fontSize: 15,
    marginLeft: 55
  },
  already: {
    marginTop: 5
  },

  signup: {
    color: "#FF714D",
    fontSize: 15
  },
  logoCenter: {
    alignItems: "center",
    marginTop: 80,
  },

  Pricewise: {
    fontSize: 20,
    marginBottom: 65,
    color: "#000000",
    fontSize: 20,
    fontFamily: "KaushanScript-Regular",
  },
  priCenter: {
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: "#fff",
    borderWidth: 0.7,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.5
  },
});
