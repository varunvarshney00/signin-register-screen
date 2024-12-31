import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MultiColumnFlatlist = () => {
    return (
        <View style={styles.containerstyle}>
            <View style={styles.leftside}>
                <Image
                    source={ require('../assets/image1.png') }
                    style={{width:205, height:172, marginBottom:0}} 
                />
                <Image
                    source={require('../assets/image2.png')}
                    style={{width:205, height:140}} 
                />
            </View>



            <View>
                <Image
                    source={require('../assets/image3.png')}
                    style={{width:200, height:103, marginBottom:0}} 
                />
                <Image
                    source={require('../assets/image4.png')}
                    style={{width:200, height:103, marginBottom:0}} 
                />
                <Image
                    source={require('../assets/image5.png')}
                    style={{width:200, height:103}} 
                />
            </View>

        </View>
    )
}

export default MultiColumnFlatlist

const styles = StyleSheet.create({
    flatliststyle: {
        height: 292,
        width: 361,
    },
    containerstyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:18
    },
    leftside:{
        marginRight:-25,
    }
})