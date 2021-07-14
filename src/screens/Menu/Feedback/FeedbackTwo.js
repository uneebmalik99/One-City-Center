import { useState } from "react";
import React from 'react';
import { View,    StatusBar,
  Text, StyleSheet,Image, SafeAreaView,ScrollView,ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../../constance/AppConstance';
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const FeedbackTwo = ({navigation})  => {
    const [selectedValue, setSelectedValue] = useState(" ");
    const countries = ["QR Code Access", "Mobile Access"]

    return (
      <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    <ImageBackground source={require('../../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <ScrollView style={styles.innercontainer1}>
       
       
  <View style={styles.head}>
      
      <Text style={[ styles.head_text,{color:'white'} ]}>Feedback / Survey</Text>

   </View>
       
       <View style={{backgroundColor:'white',height:deviceHeight*0.75, width:'95%',paddingHorizontal:20,paddingVertical:10, alignSelf:'center'}}>
         <Text style={{marginTop:20,}}>Thank you for your Valueable Feedback.{'\n'}
                your Opinions and comments are very
                important to us. We really appreciate
                the time you tookto help us improve
                in order to serve you better</Text>


      






<View style={{height:50}}>

</View>
       </View>
       
       
    

  </ScrollView>
     
     </ImageBackground>
        
        
        </SafeAreaView>

        </>
    );
};

const styles = StyleSheet.create({
  maincontainer:{
    height:deviceHeight,
    width:deviceWidth,
  },
  body:{
    marginTop:30,
    paddingHorizontal:20,
    backgroundColor:'red'
 },
   Bg:{
     height:deviceHeight,
     width:deviceWidth
   },
   innercontainer1:{
    paddingVertical:20,
    paddingHorizontal:15
   },
   head:{
    backgroundColor:'black',
    paddingVertical:10,
    borderRadius:10,
    
    alignItems:'center',    
  },
   head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
   header:{
    width:'90%',
   },
    parent: {
        flex: 1,
        marginTop: 55,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
    },
    headchild: {
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 5,
        paddingTop: 2,
        margin: 0
    },
    heading: {
        color: "white",
        fontSize: 20,
        lineHeight: 30,
        alignItems: "center",
        margin: 5
    },
    head_text:{
      color:'black',
      fontSize:16,
      fontWeight:'600'
     },
    bodychild: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        marginTop: 0,
        backgroundColor: "white",
    },
    bodytext: {
        color: "black",
        fontSize: 17,
        textAlign: "left",
        lineHeight: 20,
        margin: 20,
        marginTop: 35,
    },
    subHeading: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },
    pickerContainer: {
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        width: 275,
        justifyContent: 'center',
    },
    picker: {
        height: 35,
        width: 275,
    },
    feedbackContainer: {
        borderRadius: 20,
        borderWidth: 1,
        height: 250,
        width: 275,
    },
    TouchableOpacity: {
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eda62b',
    }
});

export default FeedbackTwo;