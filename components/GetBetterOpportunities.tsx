import { Image, SectionList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DATA = [
    {
        title: 'GET BETTER OPPORTUNITIES',
        subtitle: 'Graphene Xtreme 1',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),
    },
    {
        title: 'GET BETTER OPPORTUNITIES',
        subtitle: 'Graphene Xtreme 1',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
    {
        title: 'Top Sellers',
        subtitle: 'Graphene Xtreme 2',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
    {
        title: 'Top Sellers',
        subtitle: 'Graphene Xtreme 2',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
    {
        title: 'Top Sellers',
        subtitle: 'Graphene Xtreme 2',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
    {
        title: 'Handpicked Items for you',
        subtitle: 'Graphene Xtreme 3',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
    {
        title: 'Handpicked Items for you',
        subtitle: 'Graphene Xtreme 3',
        data: ['Towel Station', 'Rain Repellant', 'Spot-free rinse'],
        dollar: '$',
        price: 12.00,
        image: require('../assets/monthly.png'),

    },
]

const getbetteropportunities = () => {
    return (
        <View style={styles.sectionlistbigcontainer}>
            <SectionList
                sections={DATA}
                renderItem={mytems => {
                    return (
                        <View></View>
                    )
                }}


                renderSectionHeader={myheader => {
                    return (
                        // big container, the whole card
                        <View style={styles.headersection}>

                            {/* card header content */}
                            <View style={styles.cardheadercontent}>

                                {/* HEADER */}
                                <View style={styles.containerwithimage}>

                                    {/* left of header */}
                                    <View>
                                        <Text style={styles.graphene}>{myheader.section.subtitle}</Text>
                                        <View style={styles.listitemcontainer}>
                                            {myheader.section.data.map((item, index) => <Text style={styles.listitem}>{item}</Text>)}
                                        </View>
                                    </View>

                                    {/* right of header, image */}
                                    <View>
                                        <Image source={myheader.section.image} style={styles.image} />
                                    </View>

                                </View>

                                {/* SEPARATOR */}
                                <View style={styles.separator}></View>


                                {/* FOOTER */}
                                <View style={styles.footerstyle}>
                                    <Text style={styles.dollarstyle}>{myheader.section.dollar}{myheader.section.price}.00</Text>
                                    <TouchableOpacity style={styles.upgradebutton}>
                                        <Text style={styles.upgradetext}>Upgrade</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default getbetteropportunities

const styles = StyleSheet.create({
    image: {
        width: 98.71,
        height: 96,
        marginLeft:20
    },
    cardheadercontent: {
        alignItems:'center',
        borderWidth:1,
        width:353,
        height:196,
        borderRadius:4,
        borderColor:'#E5E5E5',
        justifyContent:'space-evenly'
    },
    containerwithimage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    graphene: {
        width: 135,
        height: 17,
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 17.07,
        textAlign: 'left',
        fontFamily: 'Montserrat'
    },
    listitemcontainer:{
        width:190,
        height:69
    },
    listitem: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 23,
        textAlign: 'left',
        fontFamily: 'Montserrat',
        letterSpacing: -0.5,
        color: '#585858E5'
    },
    separator: {
        width: 313,
        borderWidth: 1,
        borderColor:'#D9D9D9',
    },
    footerstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    dollarstyle:{
        width:43,
        height:20,
        fontFamily:'Montserrat',
        fontSize:14,
        fontWeight:'600',
        lineHeight:19.49,
        letterSpacing:-0.4060841500759125,
        textAlign:'left'
    },
    sectionlistbigcontainer: {
    },
    sectioncontainer: {
        padding: 10
    },
    headersection: {
        width:"100%",
        alignItems:'center',
        marginBottom:20,
    },
    upgradebutton:{
        width:89,
        height:33,
        borderRadius:4,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:178
    },
    upgradetext:{
        width:64,
        height:24,
        fontFamily:'Montserrat',
        fontSize:15,
        fontWeight:'600',
        lineHeight:24,
        letterSpacing:-0.5,
        textAlign:'center'
    }
})