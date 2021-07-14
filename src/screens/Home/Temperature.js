import React,{useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
  ScrollView,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from '../../assets/images/bg2.jpeg'
import logo from "../../assets/images/logo.jpg"
import m from "../../assets/images/dummy.png"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { deviceHeight, deviceWidth } from '../../constance/AppConstance';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';







const Temperature =  ({navigation}) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<ScrollView>

  <Image source={require('../../assets/images/temperature.png')} />
</ScrollView>

</ImageBackground>
</SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: deviceHeight,
    width: deviceWidth,

  },
  container_2:{
          width:'25%'

  },
  image: {
    flex: 1,
  },
  chkBx:{
    alignSelf:'center',
    color:'white'
        
    },
    chkTxt:{
    alignSelf:'center',
    color:'white',
    textDecorationLine: 'underline' 
            
        },
  body_item:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:5,
    opacity:0.7,
  marginTop:10,
  color:'white',

  backgroundColor:'#e41e24',
  borderRadius:10,

  },
  chkCont:{
    alignItems:'flex-start',
flexDirection:'row',
marginTop:20,
alignSelf:'center',
  
    },
  tick: {
  marginTop:20,
  alignSelf:"center",
  height:60,
  width:70,
 
},
txt:{
fontWeight:'bold',
color:'#BDBDBD',
marginTop:7,
textAlign:'center'


},

regText:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#bfe7ef',
  borderRadius:9

},
regText2:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#51dab2',
  borderRadius:9

},
regText3:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#e4db4e',
  borderRadius:9

},
regText4:{
  fontSize:16,
  color:'white',
  alignSelf:'center',
  

},
regBtnVw:{
  paddingTop:5,
  marginHorizontal:20,
},
regIconVw:{
flexDirection:'row',
justifyContent:'space-evenly',
marginTop:40,
width:'80%',
alignSelf:'center'
},
regIcon:{
height:50,
width:50
},
regIcon2:{
  marginLeft:30,
height:50,
width:50
}

}
);

export default Temperature;