import { Alert, Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../src/App'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: LoginProps) => {
  const [name, setName] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [isLoginEnabled, setIsLoginEnabled] = useState(false)




  useEffect(() => {
    if (!emailError && !passwordError && name && password) {
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [emailError, passwordError, name, password])




  const validateEmail = (text: string) => {
    const regex = /^[\w.+\-]+@gmail\.com$/;
    if (!text) {
      setEmailError('Email is required.');
    } else if (!regex.test(text)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setName(text);
  }






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


  

  const getDataAndValidate = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue != null) {
        const user = JSON.parse(jsonValue);
        if (user.email === name && user.password === password) {
          navigation.replace('Home2');
        }
        else {
          Alert.alert('Invalid email or password.');
        }
      }
      else {
        Alert.alert('No user found in the database.');
      }
    } catch (e) {
      Alert.alert('Error retrieving user data.');
    }
  }



  return (
    // whole screen
    <View style={styles.wholescreen}>

      {/* content view */}
      <View style={styles.contentscreen}>


        <View>

          <Text style={styles.welcomeback}>Welcom Back</Text>
          <Text style={styles.continue}>Continue with your valid credentials</Text>


          <TextInput
            style={[styles.placeholder, emailError ? styles.errorfirstnamestyle : null]}
            placeholder='Email Address'
            value={name}
            onChangeText={validateEmail}
          />
          {emailError ? <Text style={styles.errorfirstnamesubtext}>{emailError}</Text> : null}



          <View style={styles.verticalspace}></View>



          <View style={styles.forgoteye}>
            <TextInput
              style={[styles.placeholder, passwordError ? styles.errorfirstnamestyle : null]}
              placeholder='Password'
              value={password}
              secureTextEntry={isPasswordHidden}
              onChangeText={validatePassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
              <Image
                source={require('../assets/eye.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={styles.errorfirstnamesubtext}>{passwordError}</Text> : null}




        </View>

        <TouchableOpacity onPress={() => {
          navigation.navigate('VerifyEmail')
        }}>
          <Text style={styles.forgotpassoword}>Forgot password?</Text>
        </TouchableOpacity>






        <TouchableOpacity
          style={[styles.login, isLoginEnabled ? styles.loginEnabled : styles.loginDisabled]}

          onPress={() => {
            if (!name) {
              setEmailError('Email is required.');
            }
            if (!password) {
              setPasswordError('Password is required.');
            }

            if (!emailError && !passwordError && name && password) {
              getDataAndValidate();
            }
          }}
          disabled={!isLoginEnabled}
        >
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>



        <Text style={styles.already}>Do not have an account?
          <TouchableOpacity onPress={() => {
            navigation.replace('Register')
          }}><Text style={styles.signin}>{"  Register "}</Text></TouchableOpacity>
          now
        </Text>


      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginEnabled: {
    backgroundColor: '#4F5F72', 
  },
  loginDisabled: {
    backgroundColor: '#D2D3D8',
  },
  errorfirstnamesubtext: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
    marginTop: 5
  },
  contentscreen: {
    marginTop: 160
  },
  arrowcontainer: {
  },
  backarrow: {
    marginBottom: 60,
    width: 18,
    height: 16,
    marginLeft: -12
  },
  errorfirstnamestyle: {
    borderColor: 'red',

  },
  wholescreen: {
    borderWidth: 2,
    width: "100%",
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center'

  },
  welcomeback: {
    width: 185,
    height: 31,
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 31.2,
    letterSpacing: -0.03,
    textAlign: 'left',
  },
  continue: {
    width: 248,
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
    position: 'relative,'
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
    padding: 17
  },
  image: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 18,
    top: '-8%'
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
    marginTop: 72,
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
    textDecorationLine: "underline",
    marginTop: 4,
  }
})