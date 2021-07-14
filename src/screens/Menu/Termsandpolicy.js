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
 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../constance/AppConstance';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';

 const Termsandpolicy = ({navigation}) => {
 
const [toggle , settoggle] = useState(0)

  useEffect(() => {

  
    // animate()
    });
    
    return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    
       <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <View style={styles.innercontainer1}>
    

<Image  style={{height:40 ,alignSelf:'center', width:40}} source={require('../../assets/images/logo.jpg')}/>

   <TouchableOpacity 
   onPress={()=> {toggle == 1 ? settoggle(0):null }}
   style={[styles.head ,{marginTop:10,  backgroundColor:toggle == 0 ? '#ff9933' : '#0009'}]}>
      
      <Text style={styles.head_text}>Terms & Policy</Text>

   </TouchableOpacity>
   <TouchableOpacity
      onPress={()=> {toggle == 0 ? settoggle(1):null }}

   style={[styles.head,{marginTop:5 , backgroundColor:toggle == 1 ? '#ff9933' : '#0009'}]}>
      
      <Text style={styles.head_text}>Privacy Policy</Text>

   </TouchableOpacity>
      

      <ScrollView style={styles.txt_body}>

      {toggle == 0 ?
              <Text style={{marginBottom:250,}}> ONLINE POLICIES

              Terms of Use
              
              Last Revised: June 20th, 2014
              
              PLEASE READ THESE TERMS OF USE CAREFULLY.
              BY ACCESSING OR USING THIS WEBSITE, YOU
              AGREE TO BE BOUND BY THE TERMS DESCRIBED
              HEREIN AND ALL TERMS INCORPORATED BY
              REFERENCE. IF YOU DO NOT AGREE TO ALL OF
              THESE TERMS, DO NOT USE THIS WEBSITE.
              
              These Terms of Use apply to your access to, and use
              of, all or part of any website or mobile application of
              Coffee Concepts Retail Co.,Ltd (“OCC”),
              including www.OCC.co.th, and any other site, mobile
              application or online service where these Terms of Use
              are posted or incorporated by reference (collectively, the
              “Sites”). These Terms of Use do not alter in any way the
              terms or conditions of any other agreement you may
              have with OCC or its affiliated companies for products,
              services or otherwise. If you are using the Sites on
              behalf of any entity, you represent and warrant that you
              are authorized to accept these Terms of Use on such
              entity’s behalf, and that such entity agrees to indemnify
              you and OCC for violations of these Terms of Use. This
              agreement contains disclaimers and other
              provisions that limit our liability to you.
              
              In the event there is any conflict or inconsistency
              between these Terms of Use and any other terms of use
              that appear on the Sites, these Terms of Use will
              govern. However, if you navigate away from the Sites to
              a third party site, you may be subject to alternative
              terms and conditions of use, as may be specified on
              such site. In such event, the terms and conditions of use
              applicable to that site will govern your use of that site.
              
              access.
              
              While we make reasonable efforts to provide accurate
              and timely information about OCC and its affiliates on
              the Sites, you should not assume that the information is
              always up to date or that the Sites contain all the
              relevant information available about OCC and its
              affiliates. In particular, if you are making an investment
              decision regarding OCC or its affiliates, please consult a
              number of different sources, including the filings
              submitted by OCC Corporation with the Securities and
              Exchange Commission of U.S.A.
              
              OCC reserves the right to change or modify these Terms of
              Use or any policy or guideline of the Sites, at any time and in
              its sole discretion. Any changes or modifications will be
              effective immediately upon posting the revisions to the Sites,
              and you waive any right you may have to receive specific
              notice of such changes or modifications. Your continued use
              of the Sites will confirm your acceptance of such changes or
              modifications; therefore, you should frequently review these
              Terms of Use and applicable policies to understand the
              terms and conditions that apply to your use of our Sites. If
              you do not agree to the amended terms, you must stop using
              the Sites.
              
              Eligibility, Registration and Account
              
              The Sites may only be used by individuals aged twenty (20)
              years or older. If the User is under the age of twenty (20)
              years, User should review these Terms with User’s parent or
              guardian to make sure the User and User’s parent or
              guardian understand them.
              
              In order to participate in certain areas of our Sites, you will
              need to register for an account. You agree to (a) create only
              one account; (b) provide accurate, truthful, current and
              complete information when creating your account; (c)
              maintain and promptly update your account information; (d)
              maintain the security of your account by not sharing your
              password with others and restricting access to your account
              and your computer; (e) promptly notify OCC if you discover
              or otherwise suspect any security breaches relating to the
              Sites; and (f) take responsibility for all activities that occur
              under your account and accept all risks of unauthorized</Text>
              :
              <Text style={{marginBottom:250,}}> 
              
              DATA PROTECTION POLICY

This document (“Data Protection Policy”) is intended to
provide information on how “One City Center” (“OCC”, “we”,
“our” or “us”) collects, uses, discloses, manages and handles
personal data which is subject to the Personal Data
Protection Act B.E. 2562 (“the Act”). Please read this Data
Protection Policy carefully. By accessing our website, using
any services provided by OCC, signing up for any products
and services provided by OCC, submitting any information to
us, or otherwise showing your agreement thereon, you will be
deemed to have agreed and consented to the terms of this
Data Protection Policy. OCC reserves the right to amend,
alter, change or modify this Data Protection Policy at any time
without prior notice. Any amendment, alteration, changes or
modification will be posted from time to time on our website.
Subject to your rights under any applicable laws, you agree or
shall be deemed to agree to be bound by any of such
amended, altered, changed or modified Data Protection
Policy by continuing to access our website, using any
services provided by OCC, signing up for any products and
services provided by OCC, submitting information to us, or
otherwise showing your agreement thereon.

Personal Data

In this Data Protection Policy,“Personal Data” means any
information pertaining to a natural person, which enables the
identification of such person, whether directly or indirectly but
does not include the specific information of the decreased.

Examples of such Personal Data you may provide to us
include (depending on the nature of your interaction with us)
your name, passport or other identification number, telephone
number(s), mailing address, email address, network data and
any other information relating to any individuals which you
have provided us in any forms you may have submitted to us,
or via other forms of interaction with you.
Collection of Personal Data

OCC may collect your Personal Data in several different
ways. Please take care when submitting information to us,
in particular when completing free text fields or uploading
documents and other materials. Some of our services are
automated and we may not recognize that you have
accidentally provided us with incorrect or sensitive
information.

Whenever you interact with OCC, you may or may be
asked to provide us your Personal Data. For example:

when creating your accounts, such as for My OCC, we
may ask you to provide a range of information, such as
your name, date of birth, contact details, interests and
account and newsletter preferences;

when you purchase, register, send for repair or return
one of our products online, we may record the call
and/or ask you to provide information such as your
contact details, delivery date and place of purchase and
payment information;

when you contact our customer service centers for
assistance, we may keep information about the call,
including your name, the product(s) you bought, the
reason to why you contacted us and the advice we gave
you;

when you visit us at a public event, such as workshop,
trade show or exhibition or participate in one of our
surveys, competitions or prize draws, we may ask for
information, such as your business card, name, contact
details, interests and preferences;

when you use our online services, we may receive
content that you choose to upload, such as product
reviews, comments, photos and forum posts, or details
of your interests and preferences that you choose to tell
us about for example, when you select the services that
you wish to receive; and

When you submit your Personal Data to us for any other
reasons.

If you provide us with any Personal Data relating to a third
party (e.g. information of your spouse, children, parents,
and/or employees), by submitting such Personal Data to
us, you represent to us that you have obtained the consent
of the third party to provide us with their Personal Data for
the purposes as listed below.

You should ensure that all Personal Data submitted to us is
complete, accurate, true and correct. Failure on your part
to do so may result in our inability to provide you with the
products and services you have requested.

OCC will only retain your Personal Data for as long as is
reasonably necessary for the various purposes set out in
this policy or to otherwise comply with any applicable laws
and regulations concerning the mandatory retention of
certain types of information.

Purpose of Collection, Use and Disclosure of Your Personal
Data

Generally, OCC collects, uses and discloses your Personal
Data for the following purposes:

resolving complaints and responding and handling
requests and enquiries;

providing customer care, warranty, returns and other
after sales services;

for staff training and quality assurance purposes,
particularly in relation to our customer relations staff at
our call, email and other support centers;

asking for your opinions on OCC products and
services and conducting product surveys;

facilitating and processing your searches and requests
for information when you contact us about OCC and its
products and services;

conducting prize draws, contests and other
promotional offers;

conducting workshops,

considering employing you if you contact us via one
of OCC’s job application websites;

managing the administrative and business operations
of OCC and complying with internal policies and
procedures;

facilitating business asset transactions (which may
extend to any mergers, acquisitions or asset sales)
involving any of the related corporations or affiliates
of OCC;

matching any Personal Data held which relates to
you for any of the purposes listed herein;

analyzing, investigating, handling, resolving any
security matters or any vulnerability;

preventing, detecting and investigating crime and
analyzing and managing commercial risks;

providing media announcements and responses;

monitoring or recording phone calls and
customer-facing interactions for quality assurance,
employee training and performance evaluation and
identity verification purposes;

organizing promotional events;

legal purposes (including but not limited to obtaining
legal advice and dispute resolution);

conducting investigations relating to disputes, billing
or fraud;

meeting or complying with any applicable rules, laws,
regulations, codes of practice or guidelines issued by
any legal or regulatory bodies which are binding on
OCC (including but not limited to responding to
regulatory complaints, disclosing to regulatory bodies
and conducting audit checks, due diligence and
investigations); and

Any purposes which are reasonably related to the
aforesaid.
In relation to particular products and services or in your
interactions with us, we may also have specifically notified
you of other purposes for which we collect, use or disclose
your Personal Data. If so, we will collect, use and disclose
your Personal Data for these additional purposes as well,
unless we have specifically notified you otherwise.

Disclosing and Transferring Personal Data

OCC will take appropriate and commercially reasonable
technical, physical, and administrative measures to protect
any Personal Data it possesses or controls from misuse or
accidental, unlawful or unauthorized destruction, loss,
alteration, disclosure, acquisition or access in accordance
with the Act. Subject to the provisions of any applicable
law, your Personal Data may be disclosed, for the
purposes listed above (where applicable), to the following:

OCC’s related corporations or affiliates and their
employees to provide content, products and services
to you or OCC;

agents, contractors or third party service providers
who provide services to OCC;

commercial shops and retailers in relation to
providing rewards and benefits;

any business partner, investor, assignee or
transferee (actual or prospective) to facilitate
business asset transactions (which may extend to
any merger, acquisition or asset sale) involving any
of OCC’s related corporations or affiliates;

our professional advisers such as auditors, financial
advisers and lawyers;

relevant government regulators, statutory boards or
authorities or law enforcement agencies to comply
with any laws, rules, guidelines and regulations or
schemes imposed by any governmental authority;
and

Any other party to whom you specifically authorize us
to disclose your Personal Data.

Cookies

In order to improve our services to you, we sometimes
use automated tracking devices such as a “cookie”. A
cookie is a small amount of data that our web server
sends to your web browser when you visit certain parts of
our website and the use of which is intended to assist our
understanding of your interest in our website. We may
use the cookies to personalize the content,
recommendations, advertisements and communications
delivered to you so that they are more relevant to you
and your interests. For example, you may see an
advertisement for a product that you have recently
viewed on our website. Please note that the cookies do
not personally identify users although they do identify a
user’s browser. You can always choose to disable
cookies from being stored on your computer by changing
your browser settings. Disabling cookies however, may
result in a limited experience of our functionality and
services and in some cases may mean that we are
unable to provide you with the services, or parts of the
services, that you have requested. Some of our business
partners whose content is incorporated into or linked to
from the website may also use cookies. However, we
have no access to or control over these cookies or
websites.

Withdrawal of Consent, Access and Correction of your
Personal Data

You have certain legal rights with respect to the personal
information OCC holds about you. These may include the
right to withdraw consent, request access, obtain a copy
or receive the Personal Data related to you, object,
correct, or request OCC to erase, destroy, anonymize or
restrict the use of the collected Personal Data. These
rights may be limited, for example if fulfilling your request
would reveal personal data about another person, or if
you ask us to delete Information which we are required
by law to keep, or have compelling legitimate interests in
keeping.

have any questions or feedback relating to your
Personal Data or our Data Protection Policy;

would like to withdraw your consent to any use of your
Personal Data as set out in this Data Protection Policy
or otherwise; or

would like to make access, obtain a copy, object,
request for erasure or anonymization, restriction,
corrections to your Personal Data records or exercise
any rights under the Act, please contact OCC as
follows:
Email: PDP.th.enquiry@OCC.com (Note: Not for
Product inquiry)
Write in to: Data Protection Officer
OCC Thai Co., Ltd.

OCC will generally be able to respond to such queries
and/or requests within 30 days after receipt of your
request.

If you withdraw your consent to any or all use of your
Personal Data, depending on the nature of your request,
OCC may not be able to continue to provide its products
and/or services to you.

If you are not satisfied with how we have handled your
questions, concerns or have any complaints about how we
process your Personal Data, you have a right to lodge a
complaint with the local data protection supervisory authority
such as the Personal Data Protection Committee.</Text>

      }

      </ScrollView>
    
 
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
  },
  txt_body:{
    backgroundColor:'white',
    marginTop:5,
    borderRadius:2,
    padding:20,
    width:'100%'
  },
  Txt:{
    color:'#ECF0F1',
    fontSize:15,
    alignSelf:'center'
  },
  line:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    opacity:0.95,
    height:1,
    marginTop:5,
    width: '100%',
  },
  btn:{
    backgroundColor:'#d09e01',
    borderRadius:10,
    width:'46%',
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  body_item:{
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
  },
  Text_input:{
    backgroundColor:'#D0D3D4',
    borderRadius:10,
    fontWeight:'600',
    borderColor:'#626567',
    borderWidth:0.7,
    marginTop:5,
    textAlign:'center'
  },
  QRcontainer:{
    width:'100%',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  datecontainer:{
    alignItems:'center',
    marginTop:20,
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
   body:{
      marginTop:30,
      width:'100%',
      paddingHorizontal:5,
    alignItems:'center'
      
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
 
 export default Termsandpolicy;
 
 