import { LogBox, Platform, SafeAreaView, Text, View } from "react-native";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import Onboarding from "../components/Onboarding";
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import VerifyEmail from "../screens/VerifyEmail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home2 from "../screens/Home2";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  VerifyEmail: undefined;
  Home2:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);


  useEffect(()=>{
    const checkOnboardingStatus = async () => {

      try {
        const hasShownOnboarding = await AsyncStorage.getItem("hasShownOnboarding");
        if (hasShownOnboarding === null)
        {
          setHasSeenOnboarding(false)
        }
        else
        {
          setHasSeenOnboarding(true)
        }
      } catch (error) {
        console.log('Failed to check onboarding status:', error);        
      } finally {
        setIsLoading(false)
      }
    };

    checkOnboardingStatus();
  },[])




  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);


  if (isLoading) {
    return <View><Text>Loading...</Text></View>;
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={hasSeenOnboarding ? 'Login' : 'Onboarding'}>

      <Stack.Screen
          name='Home2'
          component={Home2}
          options={{
            title: "Home2",
            headerShown: false

          }}
        />

      <Stack.Screen
          name='VerifyEmail'
          component={VerifyEmail}
          options={{
            title: "VerifyEmail",
            headerShown: false

          }}
        />

        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{
            title: "Onboarding",
            headerShown: false

          }}
        />


        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: "Login screen",
            headerShown: false
          }}
        />


        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            title: "Register Screen",
            headerShown: false
          }}
        />


        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Home",
            headerShown: false

          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
// <View>
{/* <Onboarding /> */ }
{/* <Login/> */ }
{/* <Register/> */ }
{/* <Home /> */ }
{/* </View> */ }

export default App;