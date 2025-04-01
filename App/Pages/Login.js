import { View, Text, Image} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Colors from '../Shared/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Image/stu_dent.png')} //
      style={{width: '100%', height: '40%',// 40% of screen height
        resizeMode: 'cover'}} />
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to STEMaths</Text>
        <Text style={styles.loginText}>Login/Signup</Text>
        
        <View style={styles.button}>
        <Ionicons name="logo-google" size={24} color="white" 
        style={{marginRight: 10}}/>
         <Text style={{color:Colors.white}}>Sign In with Google</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginText:{
        textAlign: 'center',
        marginTop: 80,
        fontSize: 20,
    }, 

    container:{
        paddingTop:40,
        marginTop:-25 ,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    welcomeText:{
    fontSize:35, textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
    },
    button: {
        backgroundColor:Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    })