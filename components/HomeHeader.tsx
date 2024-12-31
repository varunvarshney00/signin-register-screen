import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeHeader = () => {
    return (
        <View style={styles.headercontainer}>

            {/* header left */}
            <View style={styles.leftheader}>

                {/* Left wali Image */}
                <View style={styles.iconcontainer}>
                    <Image source={require('../assets/drawer.png')} style={[styles.drawerIcon, { marginTop: 0, marginLeft: 0 }]} />
                </View>


                {/* Beech wala view */}
                <View style={styles.beechwalistyle}>
                    <Text style={styles.locationtext}>LOCATION</Text>
                    <View style={styles.papawitharrow}>
                        <Text style={styles.papatext}>Papa Bear Anderson</Text>
                        <Image source={require('../assets/downarrow.png')} style={styles.downarrow} />
                    </View>
                </View>
            </View>



            {/* header right */}
            <View style={styles.headerright}>
                {/* Bell image */}
                <View style={styles.bellstyle}>
                    <Image source={require('../assets/bell.png')} style={styles.LocationIcon} />
                </View>


                {/* Cart image */}
                <View style={styles.cartstyle}>
                    <Image source={require('../assets/cart.png')} style={styles.LocationIcon} />
                </View>
            </View>


        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headercontainer: {
        backgroundColor: '#486284',
        width: 393,
        height: 123,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 12,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20

    },
    leftheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    iconcontainer:{
        marginTop:45,
        width:40,
        height:40,
        borderRadius:34,
        backgroundColor:'#D9D9D91A',
        alignItems:'center',
        justifyContent:'center',
        marginRight:12
    },
    drawerIcon:{
        height:16,
        width:18,
        resizeMode:'contain'
    },
    LocationIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
    beechwalistyle: {
        flexDirection: 'column',
        marginTop: 46,
        marginLeft: 11
    },
    locationtext: {
        width: 60,
        height: 11,
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 11,
        color: '#ffffff',
        textAlign: 'left',
        marginBottom: 8,
        fontFamily: 'Montserrat',

    },
    papawitharrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    papatext: {
        width: 162,
        height: 16,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        color: '#ffffff',
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    downarrow: {
        width: 10,
        height: 5,
        resizeMode: 'contain',
        
    },
    headerright: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bellstyle: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D91A',
        borderRadius: 34,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46,
        marginRight: 11
    },
    cartstyle: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D91A',
        borderRadius: 34,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46
    },
})