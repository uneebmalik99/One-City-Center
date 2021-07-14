import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
  Dimensions,
  TextInput,
  Touchable,
  ScrollView
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../assets/images/bg2.jpeg"
import logo from "../../assets/images/logo.jpg"
import m from "../../assets/images/l.png"
import { flex, width } from 'styled-system';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const CarparkPayment2 =  ({navigation}) => {

  const [redeemvalue , setredeemvalue] = useState('FREEDAS6')
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>


<View style={{  borderRadius:30, alignSelf:'center', width:'93%',height:'95%'}} >



<View style={{backgroundColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20, }}>
<Text style={styles.regText}>Carpark Payments</Text>  
</View>


<ScrollView style={{height:'100%',backgroundColor:'white', borderBottomLeftRadius:50,borderWidth:0.3,borderColor:'grey', borderTopWidth:0,  borderBottomRightRadius:50, }}>
  <View style={{paddingVertical:10,paddingHorizontal:12, height:'100%'}}>

    <View style={{justifyContent:'center',marginTop:12, alignItems:'center',width:'100%', paddingHorizontal:10,}}>
      <Text style={{color:'#424949'}}>Vehicle License plate number</Text>
      <TextInput editable={false} selectTextOnFocus={false} value='5577' style={{borderRadius:10,borderWidth:1,paddingVertical:5, marginTop:5,width:'100%',color:'black' , textAlign:'center', borderColor:'#898989'}}/>
    </View>

    <View style={{flexDirection:'row' ,width:'70%',marginTop:15, alignSelf:'center', justifyContent:'space-between'}}> 
    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
      <Text style={{color:'#a6a6a6'}}>Time IN</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200',color:'#2d4369'}}> <Text style={{fontSize:21,}}>09:55</Text></Text>
    </View>

    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
      <Text style={{color:'#a6a6a6'}}>Total OUT</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200',color:'#2d4369'}}> <Text style={{fontSize:21,}}>11:25</Text></Text>
    </View>


    </View>



    <View style={{flexDirection:'row' ,marginTop:5, width:'70%',alignSelf:'center', justifyContent:'space-between'}}> 
    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
      <Text style={{color:'#a6a6a6'}}>Total Time</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200',color:'#2d4369'}}> <Text style={{fontSize:21,}}>90</Text> MIN</Text>
    </View>

    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
    <Text style={{color:'#a6a6a6', fontWeight:'700'}}>Total Cost</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200',color:'#2d4369'}}> <Text style={{fontSize:20,fontWeight:'bold'}}>150</Text> THB</Text>
      </View>


    </View>

    <View style={{justifyContent:'center',marginTop:15, alignItems:'center',width:'100%', paddingHorizontal:10,}}>
      <Text style={{color:'#424949'}}>Redeem Code</Text>
      <TextInput 
        onChangeText={text => setredeemvalue(text) }
        value={redeemvalue} style={{borderRadius:10,color:'#424949',fontWeight:'bold', textAlign:'center', borderWidth:1,paddingVertical:5, marginTop:5,width:'100%', borderColor:'#898989'}}/>
    </View>




    <View style={{flexDirection:'row' ,marginTop:20, width:'80%',alignSelf:'center', justifyContent:'space-between'}}> 
    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
    <Text style={{color:'#a6a6a6', fontWeight:'700'}}>Redeem</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200', color:'#2d4369'}}> <Text style={{fontSize:20,fontWeight:'bold'}}>50</Text> THB</Text>
      </View>

    <View style={{justifyContent:'center',marginTop:2, alignItems:'center', paddingHorizontal:10,}}>
    <Text style={{color:'#a6a6a6', fontWeight:'700'}}>Balance to pay</Text>
      <Text style={{color:'black' , fontSize:15, fontWeight:'200' , color:'#2d4369'}}> <Text style={{fontSize:20,fontWeight:'bold'}}>100</Text> THB</Text>
      </View>


    </View>







    <View style={{justifyContent:'center',marginTop:12,  alignItems:'center',width:'100%', paddingHorizontal:10,}}>

      <TouchableOpacity style={{backgroundColor:'#002060',paddingHorizontal:20, justifyContent:'space-between', flexDirection:'row', borderRadius:5, paddingVertical:7,alignItems:'center', width:'90%'}}>
      <View style={{flexDirection:'row',width:'70%',alignItems:'center', justifyContent:'space-between'}}>
      <MaterialCommunityIcons color='#BDBDBD' name='credit-card-scan' size={30} />

<Text style={{color:'white', fontWeight:'bold'}}>Scan to pay</Text>

      </View>
      
      </TouchableOpacity>
    </View>


    <View style={{justifyContent:'center',marginTop:12,  alignItems:'center',width:'100%', paddingHorizontal:10,}}>

<TouchableOpacity style={{backgroundColor:'#002060',paddingHorizontal:20, justifyContent:'space-between', flexDirection:'row', borderRadius:5, paddingVertical:7,alignItems:'center', width:'90%'}}>
<View style={{flexDirection:'row',width:'70%',alignItems:'center', justifyContent:'space-between'}}>
<MaterialCommunityIcons color='#BDBDBD' name='bank-transfer-out' size={30} />

<Text style={{color:'white', fontWeight:'bold'}}>Bank Transfer</Text>

</View>

</TouchableOpacity>
</View>


  </View>
</ScrollView>

</View>






{/* <View style={styles.regView}>


<Text style={styles.regText}>Carpark Payments</Text>  

  </View>
 <View style={styles.cardView}>
     <View style={styles.cardText}>
     <Text style={styles.regBtnTxt}>Vehicle License Plate number</Text>   
   <TextInput style={styles.regBtn}></TextInput>
     </View>
<View style={styles.cardTextView1}>

<Text style={styles.regBtnTxt1}>Car Model</Text>   
<Text style={styles.regBtnTxt1}>Car Color</Text>   


</View>

<View style={styles.cardTextView2}>
  <View style={styles.cardTextCont}>
  <Text style={styles.regBtnTxt2}>Toyota Altis</Text> 
  </View>
  
<View style={styles.cardTextCont}>
<Text style={styles.regBtnTxt2}>Silver</Text>   

</View>


</View>

<View>
    <Image style={styles.carImage} source={logo}>

    </Image>
</View>

<View style={styles.cardTextView3}>
    <Text style={styles.timeText}>Total Time</Text>   
    <Text style={styles.timeDuration}>90 Min</Text>   
</View>
<View style={styles.cardTextView4}>
    <View>
    <Text style={styles.timeText}>Time IN</Text>   
    <Text style={styles.timeDuration}>09:55</Text>   
    </View>
    <View>
    <Text style={styles.timeText}>Time OUT</Text>   
    <Text style={styles.timeDuration}>11:25</Text>   
    </View>  
</View>
<View style={styles.cardTextView5}>
    <Text style={styles.timeText}>Total Cost</Text>   
    <Text style={styles.timeDuration}>150 TBH</Text>   
</View>

<View style={styles.paymentBtnVw}>
    <TouchableOpacity style={styles.paymentBtn}>
        <Text style={styles.paymentBtnTxt}>Proceed Payment</Text>
    </TouchableOpacity>
</View>

 </View> */}

  
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
    justifyContent:'center'
  },

regView:{
    
    height:30,
},
regText:{
    textAlign:'center',
  padding:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#2c2c2c',
  borderRadius:9

},
cardView:{
    backgroundColor:'white',
    height:'85%',
    marginHorizontal:30,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
    
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
  regBtnTxt:{
    fontSize:18,
    color:'black',
    marginLeft:8,
    textAlign:'center'

  },
  regBtn:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:7,
    height:50,
    marginBottom:10,
  },
  cardText:{
      marginTop:12,
      marginHorizontal:15,
  },
  cardTextView1:{
    marginTop:12,
    justifyContent:'space-between',
    marginHorizontal:15,
    flexDirection:'row',
},
cardTextView2:{
    marginTop:12,
    marginHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between'
},
cardTextView3:{
    marginTop:12,
    marginHorizontal:15,
},
cardTextView4:{
    marginTop:12,
    marginHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between'
},
cardTextView5:{
    marginTop:12,
    marginHorizontal:15,
},
regBtnTxt1:{
    fontSize:18,
    color:'black',
    textAlign:'center',
    width:'45%'

  },
  regBtnTxt2:{
    fontSize:18,
    color:'white',
    textAlign:'center',

  },
  cardTextCont:{
    width:'45%',
    backgroundColor:'#dcdcdb',
    height:60,
    borderRadius:12,
    justifyContent:'center'

  },
  timeText:{
      color:'#dcdcdb',
      textAlign:'center'
  },
  timeDuration:{
    color:'blue',
    textAlign:'center'
},
  carImage:{
    width:120,
    height:120,
    alignSelf:'center',
    marginTop:20
  },
  paymentBtnVw:{
paddingHorizontal:20,
justifyContent:'center',
marginTop:10,

  },
  paymentBtn:{
      alignSelf:"center",
      backgroundColor:'blue',
      borderRadius:9

  },
  paymentBtnTxt:{
      color:'white',
      padding:15

  },

}
);

export default CarparkPayment2;
