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




const RegisterOne =  () => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
    <Text  style={styles.regText}>Registration</Text>
  </View>
  <View style={styles.regBtnVw}>
    <TouchableOpacity style={styles.regBtn}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}>I</Text>
        <Text style={styles.regBtnTxt}>Email</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.regBtn}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}>I</Text>
        <Text style={styles.regBtnTxt}>Facebook</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.regBtn}>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}>I</Text>
        <Text style={styles.regBtnTxt}>Gmail</Text>
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
    marginTop:8
  },
  regBtn:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:7,
    height:50,
    marginBottom:30
    

  },

}
);

export default RegisterOne;