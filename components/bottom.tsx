import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Bottom = ({ onPress }) => {
    return (
        <View style={styles.navBottom}>
            <TouchableOpacity>
                <Image source={require('../assets/home.png')} style={styles.bottomIcon} />
                <Text style={styles.navText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/shop.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.navText}>SHOP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/setting.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.navText}>SCHEDULE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={require('../assets/Account.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.navText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },
    bottomIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
    navText: {
        fontSize: 10,
        marginTop: 5,
    },
});

export default Bottom;
