import React,{useState,useContext} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    Image,

} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../constants'
import ImagePicker from 'react-native-image-crop-picker';
import firebase from '../firebase/Fire';
import LottieAnimation from './LottieAnimation';


export default function SignUpScreenS({navigation}){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [number,setNumber]=useState("")
const [phone,setPhone]=useState("")
const [password,setPassword]=useState("")
const [imag,setImag]=useState("")
const [des,setDes]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")


const sup = async()=>{
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(e);
      }
    }



const submitData =()=>{
    if (name==""){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Your Name !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
     if (email==""){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Valid Email !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }

    if (email!=""){
        const validator = require('validator');
    if(!validator.isEmail(email)){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Valid Email !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
    else {
    fetch("http://10.0.2.2:3000/signInS")
    .then(res=>res.json())
    .then(results=>{
       for (let i=0;i<results.length;i++){
           if (results[i].email==email){
               
            Alert.alert(
                "Invalid Input",
                "This Email is used !!",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
              return ;
           }
       }
    })
    }
}

 if (des==""){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Description For You !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
     if (phone==""){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Phone Number For You !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
     if (phone!=""){
        const validator = require('validator');
        if(!validator.isMobilePhone(phone)){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Valid Phone Number For You !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
}
     if (number==""){
        Alert.alert(
            "Invalid Input",
            "You Should Enter Registration Number For You !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
     if (number!=""){
        if (/^-{0,1}\d*\.{0,1}\d+$/.test(number)){
        fetch("http://10.0.2.2:3000/signInS")
        .then(res=>res.json())
        .then(results=>{
           for (let i=0;i<results.length;i++){
               if (results[i].number==number){
                   
                Alert.alert(
                    "Invalid Input",
                    "This Registration number is used !!",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
                  return ;
               }
           }
        })
    }else {
        Alert.alert(
            "Invalid Input",
            "The Registration number is not valid !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
}
if (number.length!=8){
    Alert.alert(
        "Invalid Input",
        "The Registration number is not valid !!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return ;
}
   if (password.length<8){
        Alert.alert(
            "Invalid Input",
            "Password must be 8 characters or above !!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          return ;
    }
    if (password.length>7){

    if (password==confirmPassword){
  
        fetch("http://10.0.2.2:3000/send-data-student",{
        method :"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            number ,
            phone,
            password,
            imag,
            des
        })
    }).then(res=>res.json())
    .then (data=>{
        console.log(data);
        fetch("http://10.0.2.2:3000/send-data-studentComms",{
            method :"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                studentId:data._id,
                commIds:""
            })
        }).then(res=>res.json())
        .then (data=>{
            console.log(data)
        })


        fetch("http://10.0.2.2:3000/send-data-joinedEvents",{
            method :"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                student:data._id,
                events:""
            })
        }).then(res=>res.json())
        .then (data=>{
            console.log(data)
        })


        fetch("http://10.0.2.2:3000/send-data-starEvents",{
            method :"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                student:data._id,
                events:""
            })
        }).then(res=>res.json())
        .then (data=>{
            console.log(data)
        })



        fetch("http://10.0.2.2:3000/send-data-likedCommPosts",{
            method :"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                student:data._id,
                posts:""
            })
        }).then(res=>res.json())
        .then (data=>{
            console.log(data)
        })


        fetch("http://10.0.2.2:3000/send-data-likedEventPosts",{
            method :"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                student:data._id,
                commIds:""
            })
        }).then(res=>res.json())
        .then (data=>{
            console.log(data)

        })
      
    })
   sup(email, password)
    navigation.replace("SignInScreenS");
}
else {
    Alert.alert(
        "Invalid Input",
        "Password and Confirm not match !!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return ;
}}
}

function uploadImage(){
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log("image ===>>>>",image);
    setImag(image.path);
    setVisibleImage(false);
  });
} 
  const [visibleImage,setVisibleImage]=useState(true);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
            setName(val)
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const PhoneInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
            setPhone(val)
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const EmailInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
            setEmail(val)
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const NumberInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
            setNumber(val)
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const DesInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
            setDes(val)
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
        setPassword(val)
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
        setConfirmPassword(val)
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#005e66' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            {!visibleImage&&<Image
            source={{uri : imag}}
            resizeMode='contain'
            style={{
                alignSelf:'center',
                borderRadius:20,
                width: '100%',
                height: 300,
                marginBottom:15,
            }}
            />}
            {visibleImage&& <TouchableOpacity
                   onPress={()=>uploadImage()}
                    style={[styles.signIn, {
                        borderColor: '#fff',
                        borderWidth: 1,
                        marginBottom: 20,
                        height:120,
                        borderRadius:25,
                        backgroundColor:'white',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color:COLORS.primary 
                    }]}>Upload Image</Text>
                </TouchableOpacity>}
              
            <Text style={styles.text_footer}>Student Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#fff"
                    size={20}
                />
                <TextInput 
               //     placeholder="Your Register number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="white"
                        size={20}
                    />
                </Animatable.View>
                : null}
               
            </View>

         


            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#fff"
                    size={20}
                />
                <TextInput 
               //     placeholder="Your Register number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => EmailInputChange(val)}
                />

            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Registration Number</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="address-book-o"
                    color="#fff"
                    size={20}
                />
                <TextInput 
               //     placeholder="Your Register number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => NumberInputChange(val)}
                />
           
            </View>
            

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Phone Number</Text>         
               <View style={styles.action}>
                <FontAwesome 
                    name="mobile"
                    color="#fff"
                    size={30}
                />
                <TextInput 
               //     placeholder="Your Register number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => PhoneInputChange(val)}
                />
               
               
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Description</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="address-book-o"
                    color="#fff"
                    size={20}
                />
                <TextInput 
               //     placeholder="Your Register number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    multiline={true}
                    numberOfLines={1}
                    onChangeText={(val) => DesInputChange(val)}
                />
                
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#fff"
                    size={20}
                />
                <TextInput 
                    //placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="white"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="white"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

           





            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#fff"
                    size={20}
                />
                <TextInput 
                    //placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="white"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="white"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
          

                <TouchableOpacity
                    style={styles.signIn}
                   // onPress={() => sup(email, password)}

                    onPress={()=>submitData()}
                >
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#098893'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                   onPress={()=>navigation.navigate('SignInScreenS')}
                    style={[styles.signIn, {
                        borderColor: '#fff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#005e66'
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 3.35,
        backgroundColor: '#005e66',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
