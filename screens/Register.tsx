import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../src/App'
import AsyncStorage from '@react-native-async-storage/async-storage';

type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>

const Register = ({ navigation }: RegisterProps) => {

  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true)

  const [isSetupAccountEnabled, setIsSetupAccountEnabled] = useState(false);

  useEffect(() => {
    if (!emailError && !lastNameError && !firstNameError && !passwordError && !confirmPasswordError && firstName && lastName && email && password && confirmPassword) {
      setIsSetupAccountEnabled(true);
    } else {
      setIsSetupAccountEnabled(false);
    }
  }, [firstNameError, lastNameError, emailError, passwordError, confirmPasswordError, firstName, lastName, email, password, confirmPassword])


  const validateFirstName = (text: string) => {
    const regex = /^[A-Za-z]+$/;
    if (!text) {
      setFirstNameError('First name toh bharna pdega boss!!');
    }
    else if (!regex.test(text)) {
      setFirstNameError('Space htao aur special character bhi.');
    }
    else {
      setFirstNameError('');
    }
    setFirstName(text);
  };




  const validateLastName = (text: string) => {
    const regex = /^[A-Za-z]+$/;
    if (!text) {
      setLastNameError('Last name toh bharna pdega boss!!');
    }
    else if (!regex.test(text)) {
      setLastNameError('Space htao aur special character bhi.');
    }
    else {
      setLastNameError('');
    }
    setLastName(text);
  };




  const validateEmail = (text: string) => {
    const regex = /^[\w.+\-]+@gmail\.com$/;
    if (!text) {
      setEmailError('Email is required.');
    } else if (!regex.test(text)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setEmail(text);
  }




  const validatePhoneNumber = (text: string) => {
    const regex = /^[0-9]{10,}$/;
    if (!text) {
      setPhoneNumberError('Phone number is required.');
    } else if (!regex.test(text)) {
      setPhoneNumberError('Phone number should only contain at least 10 digits.');
    } else {
      setPhoneNumberError('');
    }
    setPhoneNumber(text);
  };




  const validatePassword = (text: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!text) {
      setPasswordError('Password is required.');
    } else if (!regex.test(text)) {
      setPasswordError('Password is not validated.');
    } else {
      setPasswordError('');
    }
    setPassword(text);
  };




  const validateConfirmPassword = (text: string) => {
    if (!text) {
      setConfirmPasswordError('Please confirm your password.');
    } else if (text !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
    setConfirmPassword(text);
  };






  const handleRegister = async () => {
    if (!firstNameError &&
      !emailError &&
      !phoneNumberError &&
      !passwordError &&
      !confirmPasswordError &&
      firstName &&
      lastName &&
      email &&
      password &&
      password === confirmPassword) {

      const userDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      };

      try {
        const jsonvalue = JSON.stringify(userDetails);
        await AsyncStorage.setItem("user", jsonvalue);
        Alert.alert('User Registered Successfully')
        navigation.replace('Login');

      } catch (error) {
        console.error('Failed to save user details', error);
      }
    }

    else {
      console.log('Please fill all fields and ensure passwords match');
    }
  };


  return (
    // whole screen

      <View style={styles.wholescreen}>

        {/* content view */}
        <View style={styles.contentscreen}>

          {/* <TouchableOpacity style={styles.arrowcontainer} onPress={()=>{
            navigation.goBack()
          }}>
            <Image source={require('../assets/backarrow.png')} style={styles.backarrow} />
          </TouchableOpacity> */}


          <View>


            <Text style={styles.welcomeback}>Create an Account</Text>
            <Text style={styles.continue}>Enter in your credentials</Text>


            <TextInput
              style={[styles.placeholder, firstNameError ? styles.errorfirstnamestyle : null]}
              placeholder='First Name'
              value={firstName}
              onChangeText={validateFirstName}
            />
            {firstNameError ? <Text style={styles.errorfirstnamesubtext}>{firstNameError}</Text> : null}



            <TextInput
              style={[styles.placeholder, lastNameError ? styles.errorfirstnamestyle : null]}
              placeholder='Last Name'
              value={lastName}
              onChangeText={validateLastName}
            />
            {lastNameError ? <Text style={styles.errorfirstnamesubtext}>{lastNameError}</Text> : null}




            <TextInput
              style={[styles.placeholder, emailError ? styles.errorfirstnamestyle : null]}
              placeholder='Email'
              value={email}
              onChangeText={validateEmail}
            />
            {emailError ? <Text style={styles.errorfirstnamesubtext}>{emailError}</Text> : null}



            <TextInput
              style={[styles.placeholder, phoneNumberError ? styles.errorfirstnamestyle : null]}
              placeholder='Phone Number (Optional)'
              value={phoneNumber}
              onChangeText={validatePhoneNumber}
              inputMode='numeric'
              keyboardType='numeric'
            />
            {phoneNumberError ? <Text style={styles.errorfirstnamesubtext}>{phoneNumberError}</Text> : null}




            <View style={styles.forgoteye}>
              <TextInput
                style={[styles.placeholder, passwordError ? styles.errorfirstnamestyle : null]}
                placeholder='Password'
                secureTextEntry={isPasswordHidden}
                value={password}
                onChangeText={validatePassword}
              />
              <TouchableOpacity onPress={()=>{
                setIsPasswordHidden(!isPasswordHidden)
              }}>
              <Image source={require('../assets/eye.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorfirstnamesubtext}>{passwordError}</Text> : null}




            <View style={styles.forgoteye}>
              <TextInput
                style={[styles.placeholder, confirmPasswordError ? styles.errorfirstnamestyle : null]}
                placeholder='Confirm Password'
                secureTextEntry={isConfirmPasswordHidden}
                value={confirmPassword}
                onChangeText={validateConfirmPassword}
              />
              <TouchableOpacity onPress={()=>{
                setIsConfirmPasswordHidden(!isConfirmPasswordHidden)
              }}>
              <Image source={require('../assets/eye.png')} style={styles.image} />

              </TouchableOpacity>
            </View>
            {confirmPasswordError ? <Text style={styles.errorfirstnamesubtext}>{confirmPasswordError}</Text> : null}





          </View>

          <TouchableOpacity style={[styles.login, isSetupAccountEnabled?styles.setupEnabled:styles.setupdisabled]} onPress={()=>{
            // if(!firstName)
            // {
            //   setFirstNameError('First Name is required')
            // }
            // if(!lastName)
            // {
            //   setLastNameError('Last Name is required')
            // }
            // if(!email)
            // {
            //   setEmailError('Email is required')
            // }
            // if(!password)
            // {
            //   setPasswordError('Password is required')
            // }
            // if(!confirmPassword)
            // {
            //   setConfirmPasswordError('Confirm Password is required')
            // }
            handleRegister();
          }}
          disabled={!isSetupAccountEnabled}>

            <Text style={styles.logintext}>Setup Account</Text>
          </TouchableOpacity>

        </View>

      </View>

  )
}

export default Register;

const styles = StyleSheet.create({
  setupEnabled:{
    backgroundColor: '#4F5F72', 
  },
  setupdisabled:{
    backgroundColor: '#D2D3D8',
  },
  contentscreen: {
    marginTop: 110
  },
  arrowcontainer: {
  },
  backarrow: {
    marginBottom: 20,
    width: 18,
    height: 16,
    marginLeft: -12
  },
  wholescreen: {
    width: "100%",
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  welcomeback: {
    width: 226,
    height: 31,
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 31.2,
    letterSpacing: -0.03,
    textAlign: 'left',
  },
  continue: {
    width: 168,
    height: 18,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#4F5F72',
    marginTop: 8,
    marginBottom: 24,
  },
  verticalspace: {
    height: 24
  },
  forgoteye: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  placeholder: {
    width: 329,
    height: 55,
    fontWeight: '400',
    lineHeight: 18.2,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#4F5F72',
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C8CFD6',
    padding: 17,
    marginBottom: 18,
  },
  errorfirstnamestyle: {
    borderColor: 'red',

  },
  errorfirstnamesubtext: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
    marginTop: -10
  },
  image: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 18,
    top: '-15%'
  },
  forgotpassoword: {
    width: 329,
    textAlign: 'right',
    marginTop: 28,
    height: 14,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -.02
  },
  login: {
    width: 329,
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
    marginTop: 22,
    backgroundColor: '#D2D3D8'
  },
  logintext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20.8,
    letterSpacing: -0.02,
    textAlign: 'center'
  },
  already: {
    width: 300,
    height: 20,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: -0.02,
    textAlign: 'center',
    marginTop: 28
  },
  signin: {
    fontWeight: '700',
    textDecorationLine: "underline"
  }
});