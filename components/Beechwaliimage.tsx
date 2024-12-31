import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../src/App'

type BeechwaliimageProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
}


const Beechwaliimage = ({navigation} : BeechwaliimageProps) => {
  return (
    <View style={styles.beechimage}>
      <TouchableOpacity style={styles.logoutcontainer} onPress={()=>{
        navigation.replace('Login')
      }}>
        <Text>
          LogOut
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Beechwaliimage

const styles = StyleSheet.create({
  logoutcontainer: {
    alignItems: 'center',
    width:60,
    height:19,
    backgroundColor:'white',
    borderRadius:5,
  },
  beechimage: {
    height: 200,
    width: 393,
    backgroundColor: '#486284',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems:'center'

  },
})