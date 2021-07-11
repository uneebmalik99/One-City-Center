import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../assets/images/bg2.jpeg"
import logo from "../../assets/images/logo.png"
import m from "../../assets/images/l.png"




const HomeTwo =  () => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
<Text style={styles.regText}>Payments</Text>  

  </View>
 

  <View style={styles.regBtnVw}>
    <View style={styles.regTextView}>
    <Image  style={styles.tick} source={m}></Image>
    <Text style={styles.regText1}>Scan to Pay</Text>  
    </View>
 
    <View style={styles.regTextView}>
    <Image  style={styles.tick} source={m}></Image>

    <Text style={styles.regText1}>Bank Transfer</Text>  
    </View>
  



  </View>

  <View style={styles.regBtnVw}>
  <View style={styles.regTextView}>
    <Image  style={styles.tick} source={m}></Image>

    <Text style={styles.regText1}>Scan to Pay</Text>  
    </View>
 
    <View style={styles.regTextView}>
    <Image  style={styles.tick} source={m}></Image>

    <Text style={styles.regText1}>Bank Transfer</Text>  
    </View>
 
  </View>
  <View style={styles.regIconVw}>

  <View style={styles.regTextView}>
    <Image  style={styles.tick} source={m}></Image>

    <Text style={styles.regText1}>Transactions</Text>   
    </View>
  

  </View>

</ImageBackground></SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',

  },
  image: {
    flex: 1,
  },

regView:{
    marginTop:20,
    marginHorizontal:30,
    marginBottom:120
},
regText:{
    textAlign:'center',
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#3c3c3c',
  borderRadius:9

},
regTextView:{
    backgroundColor:'#2c2c2c',
    borderRadius:19,
    padding:5,
    width:'45%'

},
regText1:{
    padding:5,
    fontSize:15,
  color:'white',
  textAlign:'center'  

},
regText2:{
  padding:15,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#2c2c2c',
  borderRadius:19,

},
regText3:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#2c2c2c',
  borderRadius:19,
  width:150

},

regBtnVw:{
  justifyContent:"space-between",
  paddingTop:5,
  marginHorizontal:30,
  flexDirection:'row',
  height:120,

},
regIconVw:{
    justifyContent:"center",
    paddingTop:5,
    marginHorizontal:30,
    flexDirection:'row',
    height:120,
},
regIcon:{
height:50,
width:50
},
regIcon2:{
  marginLeft:30,
height:50,
width:50
},
tick: {
    marginTop:20,
    alignSelf:"center",
    height:20,
    width:20,
   
  },

}
);

export default HomeTwo;