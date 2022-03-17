import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';



const Login = (props) => {
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [oneTimePassword, setOneTimePassword] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />

        <Button title="Get OTP" onPress={()=>getOTP(phoneNumber)}>
        </Button>
        
        <TextInput
          style={styles1.input}
          onChangeNumber={setOneTimePassword}
          value={oneTimePassword}
          placeholder="OTP"
          keyboardType="numeric"
        />

        <Button title="Log In" onPress={()=>Log(props.setUserLoggedIn, phoneNumber, oneTimePassword)}>
        </Button>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  const styles1 = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 30,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default Login;

  const getOTP = (phoneNumber) => {
    fetch('https://dev.stedi.me/twofactorlogin/' + phoneNumber,{
    method: 'POST',
    headers: {
      Accept: 'application/text',
      'Content-Type': 'application/text'
  }}
    )};

    const Log = (setUserLoggedIn, phoneNumber, OTP) => {
      setUserLoggedIn(true);
      fetch('https://dev.stedi.me/twofactorlogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      oneTimePassword: OTP
    })
  }
      )};