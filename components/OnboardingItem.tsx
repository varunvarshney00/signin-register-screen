import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useWindowDimensions } from 'react-native'

const OnboardingItem = ({ item }) => {

    const { width } = useWindowDimensions();
    // console.log("item==>", item)

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View>
                <Text style={styles.onboardingtitle}>{item.title}</Text>
                <Text style={styles.onboardingdesc}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        height:600,
        width:600
    },
    onboardingtitle: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
    },
    onboardingdesc: {
        textAlign: 'center',
        fontWeight: '300',
        color: 'gray',
        paddingHorizontal: 64
    }
})