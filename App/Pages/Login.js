import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../Shared/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AuthContext } from '../Context/AuthContext';
 // Ensure this is the correct import for your version of Expo 

// Uncomment if using AuthContext for state management
// import { AuthContext } from '../context/AuthContext'; 

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();

  // State for access token and user data
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  // Uncomment if using AuthContext
  // const { userData, setUserData } = useContext(AuthContext);
  const {userData, setUserData} = useContext(AuthContext)// Ensure AuthContext is imported and used correctly
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '679173789326-5i9udl6j644og2j6623u8vcgju08tfjt.apps.googleusercontent.com',
    expoClientId: '679173789326-fdunsigub578vis6p6phjbpg9qmpcglk.apps.googleusercontent.com',
   //redirectUri: 'https://auth.expo.io/@osbrain/STEMaths', // Ensure it's correct
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken();
      getUserData();
    }
  }, [response]);

  const getUserData = async (token) => {
    try {
      const resp = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
      });

      const user = await resp.json();
      console.log('User Details:', user);
      setUserInfo(user);
      setUserData(user); // Set user data in context
      // Ensure setUserData exists before calling it
      // if (setUserData) setUserData(user);

      // Ensure Services.setUserAuth exists before calling it
      // if (Services && Services.setUserAuth) await Services.setUserAuth(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <View>
      <Image source={require('./../Assets/Image/login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to STEMaths</Text>
        <Text style={styles.loginText}>Login/Signup</Text>

        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 20,
  },
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
