import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../../assets/images/splash2.png"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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

    style={[styles.regBtn, {backgroundColor:'#7f7f7f'}]}>
    <View style={styles.item_left}> 
    <MaterialCommunityIcons color='#ededed' name='account-circle-outline' size={40} style={{alignSelf:'center'}} />

    </View>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Continue with facebook</Text>
      </View>
   
    </TouchableOpacity>

    <TouchableOpacity   
        onPress={()=> {alert('Service Unavailable                                  \'demo Mobile App \'')}}

    style={styles.regBtn}>
    <View style={styles.item_left}> 
    <Image style={styles.img}  source={require('../../../assets/images/facebook3.png')}/>

    </View>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Continue with facebook</Text>
      </View>
   
    </TouchableOpacity>


    <TouchableOpacity  
        onPress={()=> {alert('Service Unavailable                                  \'demo Mobile App \'')}}

    style={styles.regBtn}>
    <View style={styles.item_left}> 
    <Image style={styles.img}  source={require('../../../assets/images/search.png')}/>

    </View>
      <View style={styles.regBtnCnt}>
        <Text style={styles.regBtnIcn}></Text>
        <Text style={styles.regBtnTxt}>Continue with Google</Text>
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
  img:{
    width:'100%', 
    height:'100%' ,
     resizeMode:'center'
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
  item_left:{
    width:'15%', 
    justifyContent:'center'
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
    fontSize:18,
    color:'white',
    marginLeft:8

  },
  icon:{
    height:40,
    width:'10%'
  },
  regBtnIcn:{
    fontSize:20,
    color:'white',

  },
  regBtnCnt:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    width:'80%'
  },
  regBtn:{
    borderColor:'#7f7f7f',
    borderWidth:0.7,
    borderRadius:10,
    height:60,
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    backgroundColor:null
    

  },

}
);

export default RegisterOne;