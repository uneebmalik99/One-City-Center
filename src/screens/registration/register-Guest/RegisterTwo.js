import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../../assets/images/splash2.png"



const RegisterTwo = ({navigation})  => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

  <ScrollView style={{marginTop:40,}}>
  <View style={styles.regView}>
    <Text  style={styles.regText}>Registration</Text>
  </View>
  <View style={styles.regBtnVw}>
  <Text style={styles.regBtnTxt}>First Name</Text>   
   <TextInput      autoFocus={true}
 style={styles.regBtn}></TextInput>

   <Text style={styles.regBtnTxt}>Last Name</Text>   
   <TextInput style={styles.regBtn}></TextInput>

   <Text style={styles.regBtnTxt}>Email Address</Text>   
   <TextInput style={styles.regBtn}></TextInput>

   <Text style={styles.regBtnTxt}>Mobile Number</Text>   
   <TextInput style={styles.regBtn}></TextInput>

<View style={styles.regBtnNxtCont}>
   <TouchableOpacity
   onPress={()=> {navigation.navigate('RegisterThree')}}
   style={styles.regBtnNxt}>
        <Text style={styles.regBtnTxt}>Next</Text>
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
    marginTop:80,
    alignSelf:'center',
    alignContent:'center'

  },
  regText:{
    fontSize:30,
    color:'white',

  },
  regBtnVw:{
    paddingTop:5,
    marginTop:15,
    marginHorizontal:30,

  },
  regBtnTxt:{
    fontSize:20,
    color:'white',
    marginLeft:8,
    textAlign:'center'

  },
  regBtn:{
    borderColor:'#7f7f7f',
    borderWidth:1,
    borderRadius:7,
    marginTop:2,
    color:'white',
    height:40,
    paddingVertical:0,
    marginBottom:10,
  },
  regBtnNxtCont:{
marginHorizontal:85,
marginTop:10,
  },
regBtnNxt:{
    backgroundColor:'grey',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:9,
    height:40,
    justifyContent:'center',
    marginBottom:10,
  },

}
);

export default RegisterTwo;