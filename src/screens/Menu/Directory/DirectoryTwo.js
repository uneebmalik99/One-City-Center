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
  ScrollView,
  TouchableHighlight
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const DirectoryTwo =  ({navigation}) => {

  const [toggle , settoggle] = useState(0)
  const countries = ["Store directory", "Store directory2"]

  const [Activelist , setActivelist] = useState([
    
    {
      id:1,
      Category_name:'Adidas Originals',
      date:'02 205 1501',
      Zone:'Zone E',
      Level: 4,

      img:require('../../../assets/images/Adidas1.png')

    },
    {
      id:2,
      Category_name:'Bankok Bank',
      date:'02 205 1501',
      Zone:'Zone A',
      Level: 3,

      img:require('../../../assets/images/bankokbank.png')



    },
    {
      id:3,
      Category_name:'Citi',
      date:'02 205 1501',
      Zone:'Zone E',
      Level: 6,

      img:require('../../../assets/images/citi.png')


    },
    {
      id:4,
      Category_name:'Cotton On',
      date:'02 205 1501',
      Zone:'Zone H',

      img:require('../../../assets/images/cotton.png')


    },
    {
      id:5,
      Category_name:'Bar-B-Q Plaza',
      date:'02 205 1501',
      Zone:'Food Zone',
      Level: 1,
      img:require('../../../assets/images/bbq.png')


    },
    {
      id:6,
      Category_name:'Daiso',
      date:'02 205 1501',
      Zone:'Zone G',
      Level: 1,


      img:require('../../../assets/images/daiso.png')


    },
    {
      id:7,
      Category_name:'Dakasai',
      date:'02 205 1501',
      Zone:'Zone A',
      Level: 1,

      img:require('../../../assets/images/dakasi.png')

    },
    
    
 ])
const [routes] = React.useState([
{ key: 'first', title: 'Active' },
{ key: 'second', title: 'UpComing' },
]);







const renderlist2 = ({ item, index }) => {

     
  return(
    <View style={[styles.bodyitem,{marginTop:15,}]}>
    <TouchableHighlight
    activeOpacity={0.1}
    underlayColor="#ff9933"
    // onPress={()=>{  navigation.navigate('Access')}}
    style={styles.box}>

      <View style={styles.bodyitem_inner}>
        <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
        <MaterialCommunityIcons color='grey' name='-outline' size={40} style={{alignSelf:'center'}} />

        </View>

          <Text style={[styles.bodyitem_inner_text,{color:'grey'}]}>{item.Category_name}</Text>
      </View>

    </TouchableHighlight>
    
</View>

  )
  ;



}

const renderlist1 = ({ item, index }) => {

     
  return(
  <TouchableOpacity style={{width:'100%' ,flexDirection:'row', borderBottomWidth:0.6, borderColor:'grey', marginTop:10, }}>
    <View style={{width:'25%'}}>
    <Image  style={{width:'100%', height:70 , resizeMode:'stretch'}} source={item.img}/>
    </View >


    <View style={{width:'45%',alignItems:'center',justifyContent:'center', }}>
    <Text style={{fontSize:13}}>
      {item.Category_name}
    </Text>
    <Text style={{fontSize:13}}>
     Level {item.Level} | {item.Zone}
    </Text>
    </View>


    <View style={{width:'30%',justifyContent:'center',alignItems:'flex-end', }}> 
      <Text style={{fontSize:12}}>
        {item.date}

        </Text>
    </View>

  </TouchableOpacity>
  )
  ;



}




  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

<Image source={building} style={styles.tick}></Image>

<View style={{  borderRadius:30,marginTop:5, alignSelf:'center', width:'93%',height:'85%'}} >


{/* 
<SelectDropdown
	data={countries}
  buttonStyle={{backgroundColor:'#0009', borderRadius:10,width:'100%'}}
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
    
     
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/> */}


<View style={{height:'100%',backgroundColor:'white', borderWidth:0.3,borderColor:'grey', borderTopWidth:0,  }}>
  <View style={{paddingVertical:10,paddingHorizontal:12, height:'100%'}}>

  {/* <NativeBaseProvider>

  <TabComponent />


</NativeBaseProvider> */}

<View style={{flexDirection:'row', width:'100%'}}>
    <TouchableHighlight
    onPress={()=> {toggle == 1 ? settoggle(0) :null}}
    style={{borderBottomWidth:2,alignItems:'center',borderColor:toggle==0? 'orange' : 'grey', paddingVertical:10, width:'50%'}}>
        <Text style={{fontWeight:'700',color:toggle==0? 'orange' : 'grey',}}>Store Directory</Text>
    </TouchableHighlight>


    <TouchableHighlight
        onPress={()=> {toggle == 0 ? settoggle(1) :null}}

    style={{borderBottomWidth:2,borderColor:toggle==1? 'orange' : 'grey',  alignItems:'center',paddingVertical:10,width:'50%'}}>
        <Text style={{fontWeight:'700',color:toggle==1? 'orange' : 'grey', }}>Location</Text>
    </TouchableHighlight>

</View>


{toggle == 0 ?
<ScrollView style={{ height:'100%'}}>
<View style={{paddingHorizontal:5, width:'100%', }}> 

{/* <View style={{justifyContent:'center',marginTop:12, alignItems:'center',width:'100%', paddingHorizontal:10,}}>
      <Text style={{color:'#424949'}}>Quick search</Text>
      <View style={{flexDirection:'row',marginTop:5, width:'100%'}}>
      <TextInput style={{borderRadius:5,borderWidth:1,paddingVertical:2, width:'70%', borderColor:'#898989'}}/>
      <TouchableOpacity style={{width:'30%',borderTopLeftRadius:5,borderBottomRightRadius:5, alignItems:'center',justifyContent:'center', backgroundColor:'#dadada'}}>
        <Text>Search</Text>
      </TouchableOpacity>
      </View>
    </View> */}
<View style={{marginTop:10,}}>
  <Text style={{color:'orange',fontWeight:"bold", fontSize:16}}>Dining</Text>
</View>
<View style={{borderWidth:1,width:'20%',alignItems:'center', marginTop:20,}}>
  <Image style={{width:50 ,height:50 }} source={require('../../../assets/images/dakasi.png')}/>
</View>
<Text style={{alignSelf:'flex-end'}}>02 105 4626</Text>
<View style={{height:1, backgroundColor:'black', marginTop:10}}>

</View>

    <View
    
    >
      <Text> Dakasai </Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text>Leve B1 | Zone H</Text>
        <Text>location map</Text>
      </View>

      <Text style={{paddingHorizontal:5, marginTop:30, }}>All drinks at Dakasi are made with fresh ingredients with no
artificial flavoring and little to no additives. We pride ourselves in
our own recipes for cooking tea, pearls and sugar, guaranteeing a
taste that cannot be found anywhere else.</Text>
    </View>

    {/* <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={Activelist}
            contentContainerStyle={{ width:'100%' ,marginLeft:5, paddingHorizontal:10,}}
            renderItem={renderlist1}
            keyExtractor={(item,id) => id.toString()}
             /> */}

<View style={{height:50}}>

</View>
   

</View>

</ScrollView>

:

<ScrollView>
  <View style={{justifyContent:'center',alignSelf:'center',justifyContent:'space-evenly',  flexDirection:'row', marginTop:12, alignItems:'center',width:'90%', paddingHorizontal:10,}}>
    
    
  <View style={{alignItems:'center'}}>
    <TouchableOpacity >

<View style={{borderRadius:50, borderColor:'grey',padding:13, borderWidth:1}}>
<FontAwesome5 color='grey' name='directions' size={30} style={{alignSelf:'center'}} />

</View>


</TouchableOpacity>
  <Text>
    Direction
  </Text>
    </View>
  


    <View style={{alignItems:'center'}}>

     <TouchableOpacity>

      <View style={{borderRadius:50,borderColor:'grey',padding:13, borderWidth:1}}>
      <MaterialCommunityIcons color='grey' name='google-maps' size={30} style={{alignSelf:'center'}} />
    
      </View>


     </TouchableOpacity>
     <Text>
    Google map
  </Text>
    </View>


<View style={{alignItems:'center'}}>
     <TouchableOpacity>

<View style={{borderRadius:50, borderColor:'grey',padding:13, borderWidth:1}}>
<MaterialIcons color='grey' name='share' size={30} style={{alignSelf:'center'}} />

</View>


</TouchableOpacity>
<Text >
    Share
  </Text>
    </View>

    </View>

    
    
    <Image  style={{marginTop:10,}} source={require('../../../assets/images/map.jpeg')}/>

</ScrollView>

}






  </View>
</View>

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
    justifyContent:'center'
  },
  head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
listdesign:{
  width:'100%',
  marginTop:10,
  
},
bodyitem:{
  justifyContent:'space-between',
  flex:0.33,
  marginTop:10,
  marginRight:5,
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
  borderColor:'#c9c9c9',
  borderWidth:2.1,
  borderRadius:18,
  height:deviceHeight*0.13,
  width:'100%',
  padding:5,
  justifyContent:'center'

},
bodyitem_inner_text:{
  fontSize:14,
  color:'#ededed',
  textAlign:'center'
 },
listdesign2:{
padding:5,
borderWidth:1,
width:'100%',
marginTop:10,
height:deviceHeight*0.24,
borderColor:'#424949',
flexDirection:'row',
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

export default DirectoryTwo;
