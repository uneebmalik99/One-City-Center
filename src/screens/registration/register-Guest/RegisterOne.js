import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../../assets/images/splash2.png"



const RegisterOne = ({navigation}) => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
    <Text  style={styles.regText}>Registration</Text>
  </View>
  <View style={styles.regBtnVw}>
    <TouchableOpacity 
    onPress={()=> {navigation.navigate('RegisterTwo')}}
    style={[styles.regBtn,{backgroundColor:'#7f7f7f'}]}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Create Account with email</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=> {alert('demo app')}}
    style={styles.regBtn}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Continue with Facebook</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity 
        onPress={()=> {alert('demo app')}}

    style={styles.regBtn}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Continue with Gmail</Text>
      </View>
    </TouchableOpacity>

  </View>
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
    paddingTop:100,
    marginHorizontal:30,

  },
  regBtnTxt:{
    fontSize:20,
    color:'white',
    marginLeft:8

  },
  regBtnIcn:{
    fontSize:20,
    color:'white',

  },
  regBtnCnt:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
  },
  regBtn:{
    borderColor:'white',
    borderWidth:0.7,
    borderRadius:10,
    height:60,
    marginTop:30,
    justifyContent:'center',
    backgroundColor:null
    

  },

}
);

export default RegisterOne;