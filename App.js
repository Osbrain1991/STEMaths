import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [userData,setUserData] = useState();
  useEffect(() => {

  }, []);
  // Uncomment if using AuthContext
  return (
    <View>
      <AuthContext.Provider
      value={{userData,setUserData}}>  
      {userData?<Home/>:<Login/>}
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
