import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DATA = [
    {
        title: 'Explore Lounge Benefits1'
    },
    {
        title: 'Explore Lounge Benefits2'
    },
    {
        title: 'Explore Lounge Benefits3'
    },
    {
        title: 'Explore Lounge Benefits4'
    },
    {
        title: 'Explore Lounge Benefits5'
    },
    {
        title: 'Explore Lounge Benefits6'
    },
    {
        title: 'Explore Lounge Benefits7'
    },
]

const PackageName = () => {
    return (
        <View style={styles.packagecontainer}>
            <View style={styles.header}>

                <View style={styles.imagewithtext}>
                    <Image source={require('../assets/crowns.png')} style={styles.imagestyle} />
                    <View style={styles.textstyle}>
                        <Text style={styles.youhave}>YOU HAVE</Text>
                        <Text style={styles.packagename}>Package Name</Text>
                    </View>
                </View>

                <Text style={styles.details}>Details</Text>
            </View>



            <View style={styles.footer}>
                <FlatList
                    data={DATA}
                    horizontal
                    renderItem={mytems => {
                        return (
                            <View style={styles.mytemscontainer}>
                                <Text style={styles.mytemsstyle}>{mytems.item.title}</Text>
                            </View>
                        )
                    }}
                />
            </View>


        </View>
    )
}

export default PackageName

const styles = StyleSheet.create({
    packagecontainer: {
        borderWidth: 2,
        width: 353,
        height: 149,
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#E5E5E5',
        marginBottom:32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 21,
        marginTop: 25.11,
        marginBottom: 16.11,
    },
    imagewithtext: {
        flexDirection: 'row'
    },
    imagestyle: {
        width: 44,
        height: 44,
        marginRight: 12,
        // top: 492.11px;
        // left: 45px;

    },
    textstyle: {
        flexDirection: 'column'
    },
    packagename: {
        color: '#000000',
        width: 125,
        height: 20,
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.5,
        textAlign: 'left',
        letterSpacing: -.01,
        marginTop: 1,
    },
    youhave: {
        color: '#000000B2',
        width: 59,
        height: 13,
        fontFamily: 'Montserrat',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 13.41,
        textAlign: 'left',
        letterSpacing: -.01,
        marginTop: 1,
    },
    details: {
        color: '#000000',
        width: 43,
        height: 19,
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 19,
        textAlign: 'left',
        letterSpacing: -.01,
        marginTop: 1,
        // marginRight:21
    },
    mytemscontainer:{
        width: 175,
        height: 35,
        borderRadius:30,
        backgroundColor:'#0000001A',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        marginRight:16,
    },
    mytemsstyle:{
        width:147,
        height:15,
        fontFamily:'Montserrat',
        fontSize:12,
        lineHeight:14.63,
        fontWeight:'500',
        textAlign:'center',
        letterSpacing:-.02,
    },
    footer:{
        marginLeft:24,
    }

})