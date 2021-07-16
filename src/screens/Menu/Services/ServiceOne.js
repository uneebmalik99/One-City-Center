import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';
import AppConstance, {
 deviceHeight,
 deviceWidth,
} from '../../../constance/AppConstance';
import { Tabs, NativeBaseProvider,Box,Heading, Center } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceMenu from "./ServiceMenu";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import bg2 from "../../../assets/images/bg2.jpeg"
import building from "../../../assets/images/logo.jpg"





const ServiceOne = ({navigation}) => {

const countries = ['Report Issue',"Tennant Request"]
const [ava , setava] = useState(0)
const [sub , setsub] = useState(0)
const[msg,setmsg]=useState(false)
 const [progress , setprogress] =useState(0)
 const [indeterminate , setindeterminate] =useState(true)
 const [index, setIndex] = React.useState(0);
 const [SubmittedRequestR , setSubmittedRequestR] = useState([
   {
     name:'You maintenance request has been completed',
     color:'grey'

   },
   {
    name:'Gym Locked. Repair scheduled on 10.07.21',
    color:'green'

  },
  {
    name:'Office on Level 3, Unit 10-03. Maintenance date pendings',
    color:'green'

  },
 ])
 const [SubmittedRequestT , setSubmittedRequestT] = useState([
  {
    name:'Gym locked accessed approved',
    color:'grey'

  },
  {
   name:'Mobile access request is pending building management approval',
   color:'green'

 },
 
])
 const [Activelist , setActivelist] = useState([
  
      {id:1 ,
      name:'Office',
      sub:''
      }
      
   ])
   const [InActivelist , setInActivelist] = useState([
  
     {id:1},

  ])
 const [routes] = React.useState([
  { key: 'first', title: 'Active' },
  { key: 'second', title: 'UpComing' },
]);


const renderlist1 = ({ item, index }) => {

   
  return(
    <View style={{paddingVertical:10,justifyContent:'center',backgroundColor:item.color, borderRadius:10,marginTop:5,alignItems:'center'}}>
    <Text style={{color:'white', textAlign:'center'}}>{item.name}</Text>
    
    </View>
  );



}

const renderlist2 = ({ item, index }) => {

   
  return(
    <View style={{paddingVertical:10,justifyContent:'center',backgroundColor:item.color, borderRadius:10,marginTop:5,alignItems:'center'}}>
    <Text style={{color:'white', textAlign:'center'}}>{item.name}</Text>
    
    </View>
  );



}

const rendermsg = ({ item, index }) => {

   
 return(
  <View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  // onPress={()=>{  navigation.navigate('Access')}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialCommunityIcons color='#ededed' name='calendar-star' size={40} style={{alignSelf:'center'}} />

      </View>

        <Text style={[styles.bodyitem_inner_text,{color:'#ededed'}]}>Events</Text>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  // onPress={()=> {navigation.navigate('DirectoryStack')}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#ededed' name='card-account-phone-outline' size={40} />

        <Text style={styles.bodyitem_inner_text}>Directory</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  // onPress={()=> {navigation.navigate('AccountInformation')}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#ededed' name='newspaper-variant-outline' size={40} />

        <Text style={styles.bodyitem_inner_text}>News</Text>
    </View>
      </TouchableHighlight>

</View>

 );



}

const rendermsglist = ({ item, index }) => {

   
 return(
    <View style={styles.msgListView}>
      <TouchableOpacity
      onPress={()=> setmsg(!msg)}>      
       <View style={styles.msgCol}>
         {/* <MaterialCommunityIcons color='#ededed' name='face-profile' size={40} style={{alignSelf:'flex-start'}}></MaterialCommunityIcons> */}
 
         <View style={styles.msgRow}>
           <Text style={styles.msgText}>Bloom Flower Botique</Text>
           <Text style={styles.msgText2}>Active 10 minutes ago</Text>
         </View>
         <View style={styles.badge}>
         <Feather color='#ededed' name='phone' size={25} style={{alignSelf:'center'}}></Feather>
           </View>
           
       </View>
       </TouchableOpacity>

       <View style={{alignSelf:'center',paddingVertical:10}}>
         <Text style={{alignSelf:'center',color:'white'}}>Today at 1318</Text>
       </View>

       <View style={{alignSelf:'flex-start', backgroundColor:'white',
       justifyContent:'center',  
       borderRadius:10,
       padding:10,marginVertical:10,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'gray'}}>Your flowers are ready to be picked up</Text>
       </View>

       <View style={{alignSelf:'flex-end', backgroundColor:'#34649c',
       justifyContent:'center',  
       borderTopRightRadius:10,borderTopLeftRadius:10 ,
       padding:15,marginVertical:5,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'white'}}>I will come by the shop around 5pm to pick them up</Text>
       </View>

       <View style={{alignSelf:'flex-end', backgroundColor:'#34649c',
       justifyContent:'center', borderTopRightRadius:10,borderTopLeftRadius:10 ,
       padding:15,marginVertical:5,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'white'}}>Thank You</Text>
       </View>

       <View style={{alignSelf:'flex-start', backgroundColor:'white',
       justifyContent:'center',  
       borderRadius:10,
       padding:10,marginVertical:10,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'gray'}}>Thank you, see you later at 5pm</Text>
       </View>
     
    </View>
 );



}


useEffect(() => {


  // animate()
  });

  function TabComponent() {
    return (
        <Tabs   colorScheme="orange" isFitted align="center" size="md" my={1}>
          <Tabs.Bar>
            <Tabs.Tab style={styles.tabTxt}>Available</Tabs.Tab>
            <Tabs.Tab style={styles.tabTxt}>Submitted Issues          <View style={styles.badge}>
          <Feather color='#ededed' name='phone' size={12} style={{alignSelf:'center'}}></Feather>
            </View></Tabs.Tab>
          </Tabs.Bar>
          <Tabs.Views>
            <Tabs.View >

{ava == 0 ?<View>

           <View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Office'})}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialCommunityIcons color='#717171' name='briefcase' size={40} style={{alignSelf:'center'}} />

      </View>

        <View>
        <Text style={styles.bodyitem_inner_text}>Office</Text>
        {/* <Text style={{fontSize:8}}>Office</Text> */}

        </View>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Restrooms'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='toilet' size={40} />

        <Text style={styles.bodyitem_inner_text}>Restrooms</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Gym'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='dumbbell' size={40} />

        <Text style={styles.bodyitem_inner_text}>Gym</Text>
    </View>
      </TouchableHighlight>

</View>

            <View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Elevator'})}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialIcons color='#717171' name='elevator' size={40} style={{alignSelf:'center'}} />

      </View>

        <Text style={styles.bodyitem_inner_text}>Elevator</Text>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Carpark'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='parking' size={40} />

        <Text style={styles.bodyitem_inner_text}>Carpark</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Garden'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='tree' size={40} />

        <Text style={styles.bodyitem_inner_text}>Garden</Text>
    </View>
      </TouchableHighlight>

</View>

            <View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Public Area'})}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialCommunityIcons color='#717171' name='nature-people' size={40} style={{alignSelf:'center'}} />

      </View>

        <Text style={styles.bodyitem_inner_text}>Public Area</Text>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Security'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='security' size={40} />

        <Text style={styles.bodyitem_inner_text}>Security</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':0,'name':'Others'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='dots-horizontal-circle' size={40} />

        <Text style={styles.bodyitem_inner_text}>Others</Text>
    </View>
      </TouchableHighlight>

</View>

</View>

:
<View>

<View style={styles.bodyitem}>
<TouchableHighlight
activeOpacity={0.1}
underlayColor="#ff9933"
onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Co-working Space'})}}
style={styles.box}>

<View style={styles.bodyitem_inner}>
<View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
<MaterialCommunityIcons color='#717171' name='account-group-outline' size={40} style={{alignSelf:'center'}} />

</View>

<View>
<Text style={styles.bodyitem_inner_text}>Co-working Space</Text>
{/* <Text style={{fontSize:8}}>Office</Text> */}

</View>
</View>

</TouchableHighlight>
<TouchableHighlight
activeOpacity={0.1}
underlayColor="#ff9933"
onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Event Space'})}}
style={styles.box}>
<View style={styles.bodyitem_inner}>
<MaterialCommunityIcons color='#717171' name='google-classroom' size={40} />

<Text style={styles.bodyitem_inner_text}>Event Space</Text>
</View>
</TouchableHighlight>

<TouchableHighlight
activeOpacity={0.1}
underlayColor="#ff9933"
onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Facilities'})}}
style={styles.box}>
<View style={styles.bodyitem_inner}>
<MaterialCommunityIcons color='#717171' name='scooter' size={40} />

<Text style={styles.bodyitem_inner_text}>Facilities</Text>
</View>
</TouchableHighlight>

</View>

<View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Parking'})}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialCommunityIcons color='#717171' name='parking' size={40} style={{alignSelf:'center'}} />

      </View>

        <Text style={styles.bodyitem_inner_text}>Parking</Text>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Service'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='face-agent' size={40} />

        <Text style={styles.bodyitem_inner_text}>Service</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Lost & Found'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='briefcase-search' size={40} />

        <Text style={styles.bodyitem_inner_text}>Lost & Found</Text>
    </View>
      </TouchableHighlight>

</View>


<View style={styles.bodyitem}>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Access'})}}
  style={styles.box}>

    <View style={styles.bodyitem_inner}>
      <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
      <MaterialIcons color='#717171' name='qr-code-scanner' size={30} style={{alignSelf:'center'}} />
      {/* <Image style={{height:38, alignSelf:'center', width:38}} source={require('../../../assets/images/cellphone-wireless.png')} /> */}
      <MaterialCommunityIcons color='#717171' name='cellphone-wireless' size={30} style={{alignSelf:'center'}} />



      </View>

        <Text style={styles.bodyitem_inner_text}>Access</Text>
    </View>

  </TouchableHighlight>
  <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Security'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='security' size={40} />

        <Text style={styles.bodyitem_inner_text}>Security</Text>
    </View>
      </TouchableHighlight>

   <TouchableHighlight
  activeOpacity={0.1}
  underlayColor="#ff9933"
  onPress={()=> {navigation.navigate('ServiceRI',{'id':1,'name':'Others'})}}
  style={styles.box}>
  <View style={styles.bodyitem_inner}>
        <MaterialCommunityIcons color='#717171' name='dots-horizontal-circle' size={40} />

        <Text style={styles.bodyitem_inner_text}>Others</Text>
    </View>
      </TouchableHighlight>

</View>

</View>
  }
          

            </Tabs.View>
            <Tabs.View>
          
       {sub == 0 ?     
            <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={SubmittedRequestT}
            contentContainerStyle={{ width:'100%' ,   }}
            renderItem={renderlist1}
            keyExtractor={(item,id) => id.toString()}
             />

             :

<FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={SubmittedRequestR}
            contentContainerStyle={{ width:'100%' ,   }}
            renderItem={renderlist2}
            keyExtractor={(item,id) => id.toString()}
             />

       }


              

            </Tabs.View>
          </Tabs.Views>
        </Tabs>
    );
  }


 
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.maincontainer} >
      <ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

<Image source={building} style={styles.tick}></Image>

<View style={{  borderRadius:30,marginTop:5, alignSelf:'center', width:'93%',height:'85%'}} >



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
    if(index == 0){
      setava(0)
      setsub(0)
    }else{
      setava(1)
      setsub(1)

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


<View style={{height:'100%',backgroundColor:'white', borderWidth:0.3,borderColor:'grey', borderTopWidth:0,  }}>
  <View style={{paddingVertical:10,paddingHorizontal:0, height:'100%'}}>

  <NativeBaseProvider>

  <TabComponent />


</NativeBaseProvider>


  </View>
</View>

</View>


  
</ImageBackground>
  
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 maincontainer:{
   height:deviceHeight,
   width:deviceWidth,
   flex:1,
   
 },
 image: {
  flex: 1,
  justifyContent:'center'
},
 Bg:{
   height:deviceHeight,
   width:deviceWidth
 },
 headCnt:{
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
marginTop:20,
marginBottom:30

 },
 headTxt:{
   color:'white',
   fontSize:20
 
 },
 navView:{
   width:'90%',
   height:deviceHeight,
   justifyContent:'center',
   alignItems:'center',
   alignSelf:'center',
   flex:1
 },
 tabTxt:{
   //color:'white'
   backgroundColor:'white',
 },
 cardView:{
     marginTop:-11,
   backgroundColor:'white',
   justifyContent:'center', 
   height:'88%' ,
   width:'108%',
   alignSelf:'center'
   
 },
 profileCol:{
flexDirection:'row',
padding:5,
marginVertical:5
 },
 bodyitem:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'100%',
  marginTop:20
 },
 profileRow:{
flexDirection:'column',
paddingLeft:10,
justifyContent:'center'

 },
 profileText:{
fontSize:15
 },
 profileText2:{
   fontSize:12,
     },
     cardView2:{
       justifyContent:'center',  

       
     },
     notifyTxt:{
color:'white',
backgroundColor:'white',
justifyContent:'center',  
borderRadius:10,
padding:20,
marginVertical:5,
     },
     notifyTxt2:{
        color:'white',
        backgroundColor:'#04cc6c',
        justifyContent:'center',  
        borderRadius:10,
        padding:20,
        marginVertical:5,
             },
     msgCol:{
       backgroundColor:'white',
       
       borderRadius:10,
       flexDirection:'row',
       marginVertical:5,
       padding:10
       
       
     },
     tick: {
      marginTop:5,
      alignSelf:"center",
      height:'7%',
      width:'10%',
     
    },
     msgRow:{
       flexDirection:'column',
       paddingLeft:10,
       justifyContent:'center'
       
         },
     badge:{
       borderRadius:25,
       backgroundColor:'#C64B16',
       justifyContent:'center',
       alignSelf:'flex-end',
       padding:5,
       alignItems:'center'

     },
     msgText:{
       fontSize:15,
       textDecorationStyle:'solid'
         },
         msgText2:{
           fontSize:12,
           color:'gray'
             },
             pickCont:{
                 justifyContent:'center',
                 alignSelf:'center',
             },
                head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
   head_text2:{
    color:'white',
    fontSize:20,
    fontWeight:'600',
    borderRadius:12,
    height:50,
    
   },
   bodyitem_inner_text:{
    fontSize:14,
    color:'#717171',
    textAlign:'center'
   },
   bodyitem_inner_text2:{
    fontSize:10,
    color:'#ededed',
    textAlign:'center'
   },
   bodyitem_inner:{
    flexDirection:'column',
    alignItems:'center',
    height:'99%',
    width:'99%',
    alignSelf:'center',
    justifyContent:'space-evenly'
   },
   box:{
      borderColor:'#717171',
      borderWidth:2.1,
      borderRadius:18,
      height:deviceHeight*0.15,
      width:'32%',
      padding:5,
      justifyContent:'center'

   },
menuCol:{
  flexDirection:'column',
  alignSelf:'center'
},
menuRow:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  flex:0.3,
},
cardViewMenu:{
  marginTop:-11,
backgroundColor:'white',
justifyContent:'center', 
height:'88%' ,
width:'105%',
alignSelf:'center'

},
});

export default ServiceOne;

