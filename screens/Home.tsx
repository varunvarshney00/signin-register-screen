import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Beechwaliimage from '../components/Beechwaliimage'
import BalanceLookup from '../components/BalanceLookup'
import PackageName from '../components/PackageName'
import GetBetterOpportunities from '../components/GetBetterOpportunities'
import Footer from '../components/Footer'
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../src/App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    // bada wala view
    <View>
      {/* Header */}
      <HomeHeader />
      <ScrollView style={styles.scrollcontainer}>
        <Beechwaliimage navigation={navigation}/>
        <BalanceLookup />
        <PackageName />
        <GetBetterOpportunities />
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollcontainer:{
    flexGrow:1,
  }
})