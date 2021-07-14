import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../assets/images/splash2.png"
import building from "../../assets/images/checkbox-marked-outline.png"
import { marginTop } from 'styled-system';


const RegisterActivation  = ({navigation}) => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

<ScrollView>
  <View style={styles.regView}>
    <Text  style={styles.regText}>Registration</Text>
  </View>
  <Image source={building} style={styles.tick}></Image>
<View style={styles.regBtnVw}>
  <Text style={styles.regTxt}>A vaildation link has been sent to this email</Text>   
   <TextInput style={styles.regBtn}></TextInput>
   <Text style={styles.regTxt}>Please check your email for the link to Validate your email address in order to complete your registration</Text>   


<View style={styles.regBtnNxtCont}>
   <TouchableOpacity
   onPress={()=> {alert('demo app')}}
   style={styles.regBtnNxt}>
        <Text style={styles.regBtnTxt}>Resend validation email</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.regBtnNxtCont}>
   <TouchableOpacity 
    onPress={()=> {navigation.navigate('HomeScreen')}}
   style={styles.regBtnNxt}>
        <Text style={styles.regBtnTxt}>Email Validated</Text>
    </TouchableOpacity>
    </View>

  </View>

</ScrollView>
  
</ImageBackground>
  
</SafeAreaView>
    
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
    justifyContent: "center"
  },
  regView:{
    marginTop:150,
    alignSelf:'center',
    alignContent:'center'

  },
  regText:{
    fontSize:30,
    color:'white',

  },
  regBtnVw:{
    paddingTop:5,
    marginTop:30,
    marginHorizontal:30,

  },
  regTxt:{
    fontSize:16,
    color:'white',
    marginLeft:8,
 paddingBottom:10

  },
  regBtnTxt:{
    fontSize:20,
    color:'white',
    marginLeft:8,
    textAlign:'center'

  },
  regBtn:{
    borderColor:'white',
    borderWidth:1,
    backgroundColor:'white',
    borderRadius:7,
    height:43,
    marginBottom:10,
  },
  regBtnNxtCont:{
marginHorizontal:0,
  },
regBtnNxt:{
    backgroundColor:'grey',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:9,
    height:50,
    marginBottom:10,
    marginTop:5,
    justifyContent:'center'
  },
  tick: {
      alignItems:'center',
    height:50,
    width:50,
    justifyContent: "center",
    alignSelf:'center',
    marginTop:25,
  },
}
);

export default RegisterActivation;