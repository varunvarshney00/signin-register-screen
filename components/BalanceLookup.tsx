import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BalanceLookup = () => {
    return (
        <View style={styles.balancelookupstyle}>
            <View style={styles.content}>
                <Text style={styles.nevermiss}>
                Never Miss a Wash – Set your Reminders!
                </Text>
                <Text style={styles.setemail}>
                Set Email & SMS Alerts to Keep Your Wash Visits on Track! 
                </Text>
            </View> 

            <View>
                <TouchableOpacity style={styles.buttoncontainer}>
                    <Text style={styles.reminder}>Set Reminder</Text>
                </TouchableOpacity>
            
            </View>           

        </View>
    )
}

export default BalanceLookup

const styles = StyleSheet.create({
    balancelookupstyle: {
        // alignItems: 'center',
        backgroundColor: '#486284',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        width: 361,
        height: 172,
        justifyContent: 'center',
        marginBottom: 23,
    },
    content:{
        marginLeft:20
    },
    buttoncontainer:{
        width:321,
        height:40,
        backgroundColor:'white',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:16,
        marginLeft:20
    },
    setemail:{
        fontWeight:'500',
        fontSize:11,
        lineHeight:13.41,
        width:276,
        color:'white',
        marginTop:16
    },
    nevermiss:{
        fontWeight:'700',
        fontSize:16,
        color:'white',
        lineHeight:19.5,
        width:174
    },
    reminder:{
        fontWeight:'700',
        fontSize:13,
        lineHeight:15.85,
    },
    outercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    imagestyle: {
        width: 68.04,
        height: 68.06,
        resizeMode: 'contain',
        marginRight: 9.55,

    },
    textstyle: {
        flexDirection: 'column',
    },
    shorttext: {
        width: 114,
        height: 11,
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 12.75,
        textAlign: 'left',
        color: '#ffffff',
        marginBottom: 10,
    },
    longtextstyle: {
        width: 259,
        height: 32,
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 15.6,
        textAlign: 'left',
        color: '#ffffff'
    }
})