import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';



const Login = (props) => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Phone Number"
        />

        <Button title="Get OTP" onPress={()=>getOTP(text)}>
        </Button>
        
        <TextInput
          style={styles1.input}
          onChangeNumber={onChangeNumber}
          value={number}
          placeholder="OTP"
          keyboardType="numeric"
        />

        <Button title="Log In" onPress={()=>Log(props.setUserLoggedIn, text, number)}>
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
      Accept: 'application/json',
      'Content-Type': 'application/json'
  }}
    )};

    const Log = (setUserLoggedIn, number, otp) => {
      setUserLoggedIn(true);
      fetch('https://dev.stedi.me/twofactorlogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phoneNumber: number,
      oneTimePassword: otp
    })
  }
      )};