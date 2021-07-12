import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
  TextInput,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../assets/images/bg2.jpeg"
import logo from "../../assets/images/logo.png"
import {Picker} from '@react-native-picker/picker';





const FeedbackOne =  () => {

    const [selectedValue, setSelectedValue] = useState("One City Center1");
const cl="#21130d";

  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
    <Image source={logo} resizeMode="cover" style={styles.logo}></Image>
<Text style={styles.regText}>Feedack/Survey</Text>  

  </View>
 

 <View style={styles.cardView}>

     <View style={styles.textCont}>
         <Text style={styles.feedTxt}>
             Your feedback will help us decide what improvments should be made to our
             platform to provide the best user experience.
         </Text>
         <Text style={styles.feedTxt}>
             Please take a moment to comment on your experience with us to date.
         </Text>
     </View>
     
     <View style={styles.pickerCont}>
<Text style={styles.pickerTxt}>
    Topic
</Text>
<Picker
style={styles.pick}
enabled={true}
dropdownIconColor={cl}
selectedValue={selectedValue}
onValueChange={(itemValue, itemIndex) =>
setSelectedValue(itemValue)
}>
<Picker.Item label="Select" value="java" />
<Picker.Item label="JavaScript" value="js" />
</Picker>
     </View>

     <View style={styles.feedCont}>
         <Text style={styles.pickerTxt}>Feedback</Text>
         <TextInput style={styles.feedBx}></TextInput>
     </View>

<TouchableOpacity style={styles.feedBtn}>
    <Text style={styles.feedBtnTxt}>Submit</Text>
</TouchableOpacity>

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
  logo: {
    height:40,
    width:40,
    alignSelf:'center'
  },

regView:{
    marginTop:10,
    marginHorizontal:30,
},
regText:{
    textAlign:'center',
  padding:10,
  marginTop:2,
  fontSize:20,
  color:'white',
  backgroundColor:'#3c3c3c',
  borderRadius:3

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
cardView:{
    backgroundColor:'white',
    height:'82%',
    marginHorizontal:43,
    
},
pick:{
    color:'black',
    backgroundColor:'black',
    borderRadius:8,
    borderWidth:1,
    
    },
    textCont:{
        marginTop:35,
        marginHorizontal:14,
        justifyContent:'center'
    },
    feedTxt:{
        color:'gray'
    },
    pickerCont:{
        justifyContent:'center',
        marginHorizontal:14,
        marginTop:5
    },
    pickerTxt:{
textAlign:'center'
    },
    feedCont:{
        marginHorizontal:14

    },
    feedBx:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:12,
        height:200,
        marginTop:5

    },
    feedBtn:{
        backgroundColor:'orange',
        marginHorizontal:60,
        marginTop:15
        
        ,
        borderRadius:3,
        height:30,
        justifyContent:'center'

    },
    feedBtnTxt:{
        color:'white',
        textAlign:'center',


    },
}
);

export default FeedbackOne;