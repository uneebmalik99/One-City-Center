import React, {useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
  FlatList,
  Dimensions,
  TextInput,
  Touchable,
  ScrollView
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../../assets/images/bg2.jpeg"
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../../constance/AppConstance';
import { flex, marginTop, width } from 'styled-system';
import building from "../../../assets/images/logo.jpg"
import { Tabs, NativeBaseProvider,Box,Heading, Center } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Notices =  ({navigation}) => {



  const [Activelist , setActivelist] = useState([
    
    {
      name:'Covid-19 Precautions',
      description:'we recommend all tenants to practice the following precautions to limit the spread of COVID-19',
      points:''
    
    },
    {
      name:'Filming',
      description:'Depaul University Studios will be filming a short film titled Building 57 from :',
      points:''
        }
 ])
const [routes] = React.useState([
{ key: 'first', title: 'Active' },
{ key: 'second', title: 'UpComing' },
]);





  const renderlist1 = ({ item, index }) => {

     
    return(
       <View style={styles.listdesign}>
<ImageBackground source={require('../../../assets/images/p12-greer-bangkok-a-20191102.jpeg')} resizeMode="cover" style={{width:'100%', height:deviceHeight*0.25}}>
<Text style={{margin:10,color:'white',width:'50%'}}>About one city center Bangkok</Text>

  </ImageBackground>
<Text style={{marginTop:7,paddingHorizontal:5,}}>
  about one city center Bangkok, download brochure
</Text>

<TouchableOpacity style={{backgroundColor:'#feb871',alignItems:'center',marginTop:5, paddingVertical:4, borderRadius:5,}}>
  <Text style={{color:'white',fontWeight:'700',fontSize:15}}>Download</Text>
</TouchableOpacity>
       </View>
    );



}

const renderlist2 = ({ item, index }) => {

     
  return(
     <View style={styles.listdesign2}>

       
        <Text>{item.name}</Text>
  <Text></Text>
     </View>
  );



}

function TabComponent() {
  return (
      <Tabs   colorScheme="orange" isFitted align="center" size="md" my={1}>
        <Tabs.Bar>
          <Tabs.Tab >Information</Tabs.Tab>
          <Tabs.Tab>Contacts</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View >
            
          <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={Activelist}
            contentContainerStyle={{ width:'100%' ,marginBottom:200   }}
            renderItem={renderlist1}
            keyExtractor={(item,id) => id.toString()}
             /> 




<View style={{height:200}}>  

</View>
          </Tabs.View>
          <Tabs.View>
          <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={Activelist}
            contentContainerStyle={{ width:'100%' ,   }}
            renderItem={renderlist2}
            keyExtractor={(item,id) => id.toString()}
             />
          </Tabs.View>
        </Tabs.Views>
      </Tabs>
  );
}


  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

<Image source={building} style={styles.tick}></Image>

<View style={{  borderRadius:30,marginTop:5, alignSelf:'center', width:'93%',height:'85%'}} >



<View style={{ borderTopLeftRadius:20, borderTopRightRadius:20, }}>
<Text style={styles.regText}>NOTICES</Text>  
</View>


<View style={{height:'100%', borderWidth:0.3,borderColor:'grey', borderTopWidth:0,  }}>
  <View style={{paddingVertical:10,paddingHorizontal:12, height:'100%'}}>

  {/* <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={Activelist}
            contentContainerStyle={{ width:'100%' ,marginLeft:5, paddingHorizontal:10,}}
            renderItem={renderlist2}
            keyExtractor={(item,id) => id.toString()}
             />
              */}


<View style={styles.listdesign2}>
  <View style={{width:'90%'}}>
  <Text style={{color:'grey',fontWeight:'bold'}}>Covid-19 Precautions



</Text>

<Text style={{marginTop:5, color:'grey'}}>
we recommend all tenants to practice the following
precautions to limit the spread of COVID-19
</Text>
<View style={{flexDirection: 'row', marginTop:5,}}>
      <Text>{'\u2022'}</Text>
      <Text style={{flex: 1,color:'grey', paddingLeft: 5}}>Wash your hands thoroughly</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text>{'\u2022'}</Text>
      <Text style={{flex: 1,color:'grey', paddingLeft: 5}}>Practice social distancing</Text>
    </View>
    
    <View style={{flexDirection: 'row'}}>
      <Text>{'\u2022'}</Text>
      <Text style={{flex: 1, color:'grey', paddingLeft: 5}}>If sick, stay home from work</Text>
    </View>


    <View style={{flexDirection: 'row'}}>
      <Text>{'\u2022'}</Text>
      <Text style={{flex: 1,color:'grey', paddingLeft: 5}}>If sick, call provincial hotline +get tested</Text>
    </View>





  </View>
 
 <View style={{justifyContent:'center', alignItems:'center', width:'10%'}}>
 <MaterialIcons color='grey' name='navigate-next' size={30} style={{alignSelf:'center',}} />

 </View>
</View>      



<View style={{flexDirection:'row', padding:10,backgroundColor:'white', marginTop:10,borderRadius:20}}>
 <View style={{width:'90%',}}>
   <Text style={{fontWeight:'bold', color:'grey'}}>Filming Notice</Text>

   <Text style={{marginTop:5,color:'grey'}}>Depaul University Studios will be filming a short film titled
Building 57 from</Text>


<Text style={{fontWeight:'bold', marginTop:5 ,color:'grey'}}>Saturday, 17 July – Sunday, 18 July 2021

Level 1, Zone A</Text>
<Text style={{marginTop:5,fontSize:12 ,color:'grey'}}>The area will be closed to public access and we wish to</Text>
 </View>
 <View style={{width:'10%', justifyContent:'center'}}>
 <MaterialIcons color='grey' name='navigate-next' size={30} style={{alignSelf:'center',}} />

 </View>
</View>









  </View>
</View>

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
listdesign:{
  width:'100%',
  marginTop:10,
  
},
listdesign2:{
padding:10,
width:'100%',
backgroundColor:'white',
marginTop:10,
borderRadius:25,
flexDirection:'row'
},
regView:{
    
    height:30,
},
regText:{
    textAlign:'center',
  padding:7,
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
    marginTop:5,
    alignSelf:"center",
    height:'7%',
    width:'10%',
   
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

export default Notices;
