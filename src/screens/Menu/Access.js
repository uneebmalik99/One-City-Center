/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Image,
   Text,
   StatusBar,
   TouchableOpacity,
   ImageBackground,
   TextInput,
   TouchableHighlight,
 } from 'react-native';
 import SelectDropdown from 'react-native-select-dropdown'

 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../constance/AppConstance';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';


 const Access = ({navigation}) => {
   const [progress , setprogress] =useState(0)
   const [toggle , settoggle] = useState(0)
   const [indeterminate , setindeterminate] =useState(true)
   const countries = ["QR Code Access", "Mobile Access"]

   const  animate = ()=> {
    let progress = 0;
    setprogress(progress)
    setTimeout(() => {
      setindeterminate(false)
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setprogress(progress)
      }, 1500);
    }, 1000);
  }

  useEffect(() => {

  
    // animate()
    });
    
    return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    
      <LinearGradient
                          colors={['#E5E7E9', '#909497' , '#0009' ]}
                          
                          locations={[0.5 ,0.8 , 0.99 ]}
                          style={{alignItems: 'center',
                          justifyContent: 'flex-start',
                          opacity:0.95,
                          height:deviceHeight,
                          borderBottomLeftRadius:8,
                          borderBottomRightRadius:8,
                          borderTopLeftRadius:8,
                          borderTopRightRadius:8,
                          width: '100%',}}
                        >

                      
  <ScrollView style={styles.innercontainer1}>


  <SelectDropdown
	data={countries}
  buttonStyle={{backgroundColor:'#0008', borderRadius:10,width:'100%'}}
  buttonTextStyle={styles.head_text}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
   defaultValueByIndex={0} 
   renderDropdownIcon={() => {
    return (
      <FontAwesome name="chevron-down" color={"white"} size={18} />
    );
  }}
  dropdownIconPosition={"right"}
   // use default value by index or default value
	buttonTextAfterSelection={(selectedItem, index) => {
    console.log(selectedItem +'---'+ index);
    if(index == 0 ){
      if(toggle == 0){
        
      }else{
        settoggle(0)

      }
    }else{
      if(toggle == 1){
        
      }else{
        settoggle(1)

      }
    }
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
   {/* <View style={styles.head}>
      
      <Text style={styles.head_text}>QR Code Access</Text>

   </View> */}

   {toggle == 0 ? 
   <View style={styles.body}>
     <View style={styles.QRcontainer}>
     <QRCode
     
      value="http://awesome.link.qr"
    />
<Progress.Bar 
 progress={progress}
 indeterminate={indeterminate}
style={{marginTop:10,}}  borderColor='#0001' unfilledColor='#E5E7E9'  width={120} />


         </View>
   
   <View style={styles.datecontainer}>

      <Text style={styles.font_1}>Date</Text>
      <Text style={styles.font_2}>05.07.2021</Text>

      <Text style={styles.font_1}>Time Access</Text>
      <Text style={styles.font_2}>10:32</Text>

      <Text style={styles.font_1}>Current Total Time</Text>
      <Text style={styles.font_2}>32 MINS</Text>

   </View>




        </View>
  
  :  
  <View style={styles.body2}>
 
    <View style={styles.head_2}>
      <View style={{width:'10%'}}>
      <Feather color='#BDBDBD' name='menu' size={20} />

      </View>
      <View style={{width:'80%'}}>
      <Text style={{alignSelf:'center', color:'white'}} >dormakaba mobile access</Text>

      </View>
      <View style={{width:'10%'}}>

      </View>
    </View>


    <View  style={styles.body2_item_3}>
      <View  style={styles.body2_item_3_1}>
              <Text style={{textAlign:'center'}}>Please enter your phone number</Text>
      </View>
    </View>

    <View  style={styles.body2_item_3}>
      <View  style={styles.body2_item_4}>
        <TextInput style={styles.txt_input}/>
        <View style={{flexDirection:'row',marginTop:3, justifyContent:'space-between'}}>
        <TextInput style={[styles.txt_input,{width:'22%'}]}/>
        <TextInput style={[styles.txt_input,{width:'76%'}]}/>

        </View>

      </View>
    </View>

    <View style={{width:'50%', alignSelf:'center'}}>
    <View style={styles.checkcontainer}>
    <CheckBox
          value={true}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.checkbox_txt}>I accept the Terms of use</Text>
    </View>
    <View style={styles.checkcontainer}>
    <CheckBox
          value={true}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.checkbox_txt}>I accept the EULA</Text>
    </View>

    <View style={styles.checkcontainer}>
    <CheckBox
          value={true}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={[styles.checkbox_txt,{textAlign:'left'}]}>I agree that data is being sent for andlysis</Text>
    </View>
   
    </View>



    <View style={styles.body2_item_5}>
      <Text style={styles.body2_item_5txt}>Version 3.8.0 (9470)</Text>
      <TouchableHighlight style={styles.body2_item_5btn}>
        <Text style={{fontSize:12, color:'white', fontWeight:'700'}}>CONTINUE</Text>
      </TouchableHighlight>
    </View>


     

     </View>

  }
  </ScrollView>
  </LinearGradient>
 
    </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  maincontainer:{
    height:deviceHeight,
    width:deviceWidth,
  },
  QRcontainer:{
    width:'100%',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  body2_item_5btn:{
    backgroundColor:'#d9dad6',
    width:'60%',
    alignItems:'center',
    padding:5,
    marginTop:5

  },
  body2_item_5:{
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'
  },
  body2_item_5txt:{
    fontSize:10,

  },
  body2_item_3:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15


  },
  checkcontainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },

  body2_item_4:{
    width:'65%',
    justifyContent:'center',
    backgroundColor:'red'
  },
  body2_item_4_1:{
    flexDirection:'row',
    justifyContent:'center'
  },
  
  body2_item_4:{
    width:'50%'
  },
  txt_input:{
    borderWidth:0.7,
    
    paddingVertical:0
  },
  body2_item_3_1:{
    backgroundColor:'#d9dad6',
    width:'70%',
    padding:20,
    alignItems:'center'
  },
  datecontainer:{
    alignItems:'center',
    marginTop:20,
  },
  checkbox_txt:{
    fontSize:10,
    color:'#9ab2cd'
  },
  font_1:{
    fontSize:15,
    marginTop:12,
    color:'grey'
  },
  font_2:{
    color:'grey',
    marginTop:5,
    fontSize:19
  },
  checkbox: {
    alignSelf: "center",
  },
   Bg:{
     height:deviceHeight,
     width:deviceWidth
   },
   head:{
     backgroundColor:'#0008',
     paddingVertical:10,
     borderRadius:10,
     alignItems:'center',    
   },
   head_2:{
    flexDirection:'row',
    backgroundColor:'#013493',
    padding:12,
   },
   
   body:{
      marginTop:30,
      width:'100%',
      backgroundColor:'white',
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      height:deviceHeight - 60,
      padding:20,
      borderColor:'#E5E7E9',
      borderWidth:0.7,
      
   },
   body2:{
    marginTop:30,
    width:'100%',
    backgroundColor:'white',
    borderColor:'#E5E7E9',
    height:deviceHeight - 60,
    borderWidth:0.7,
   },
   bodyitem_inner_text:{
    fontSize:14,
    color:'#BDBDBD',
    textAlign:'center'
   },
   bodyitem_inner:{
    flexDirection:'column',
    alignItems:'center',
    height:'80%',
    width:'85%',
    alignSelf:'center',
    justifyContent:'space-evenly'
   },
   box:{
      backgroundColor:'#262626',
      borderRadius:25,
      height:deviceHeight*0.21,
      width:'49%',
      padding:10,
      justifyContent:'center'

   },
   bodyitem:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    marginTop:10
   },
   head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
   innercontainer1:{
    paddingVertical:20,
    paddingHorizontal:15,
    width:'100%',
   }
  
 });
 
 export default Access;
 
 