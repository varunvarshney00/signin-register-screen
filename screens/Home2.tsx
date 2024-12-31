import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Beechwaliimage from '../components/Beechwaliimage'
import BalanceLookup from '../components/BalanceLookup'
import PackageName from '../components/PackageName'
import GetBetterOpportunities from '../components/GetBetterOpportunities'
import Footer from '../components/Footer'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../src/App'
import MultiColumnFlatlist from '../components/MultiColumnFlatlist'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home2 = ({ navigation }: HomeProps) => {
    return (
        // bada wala view
        <View >
            {/* Header */}
            <HomeHeader />
            <ScrollView
                style={styles.scrollcontainer}
                contentContainerStyle={styles.contentscrollcontainer}
            >
                <Beechwaliimage navigation={navigation} />
                <MultiColumnFlatlist />
                <BalanceLookup />
            </ScrollView>
        </View>
    )
}

export default Home2

const styles = StyleSheet.create({
    scrollcontainer: {
        flexGrow: 1,
    },
    contentscrollcontainer: {
        paddingBottom: 200
    }
})