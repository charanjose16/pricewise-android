import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView,SafeAreaView } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

 export default function OfferScreen() {
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView  style={styles.container}>
        <View>
          <Text onPress={()=>navigation.navigate('Home')}>This is Offer Screen</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
    

  )}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F1D093",
    paddingBottom:800
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
