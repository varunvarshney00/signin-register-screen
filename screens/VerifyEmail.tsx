import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../src/App'

type VerifyEmailProps = NativeStackScreenProps<RootStackParamList, 'VerifyEmail'>

const VerifyEmail = ({ navigation }: VerifyEmailProps) => {

    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    }

    return (
        // whole screen
        <View style={styles.wholescreen}>
            {/* content with back button */}
            <View>


                <TouchableOpacity style={styles.arrowcontainer} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={require('../assets/backarrow.png')} style={styles.backarrow} />
                </TouchableOpacity>
                
                
                
                {/* content view */}
                <View>
                    <Text style={styles.verifyemail}>Verify Email</Text>
                    <Text style={styles.enterthecode}>Enter the code that we just sent to you on hcankit7@gmail.com</Text>
                    <Text style={styles.code}>6-digit Code</Text>

                    {/* OTP BOXES */}
                    <View style={styles.otpcontainer}>
                        {otp.map((value, index) => (
                            <TextInput
                                key={index}
                                style={styles.otpbox}
                                value={value}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                keyboardType='numeric'
                                maxLength={1}
                                textAlign='center'
                            />
                        ))}
                    </View>


                    <Text style={styles.resend}>Resend</Text>

                    <TouchableOpacity style={styles.verifybox}>
                        <Text style={styles.verifytext}>Verify</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default VerifyEmail

const styles = StyleSheet.create({
    backarrow: {
        marginBottom: 50,
        width: 18,
        height: 16,
        marginLeft: -12
    },
    verifyemail: {
        width: 146,
        height: 31,
        fontFamily: 'Montserrat',
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 31.2,
        marginBottom: 6
        // line-height: 31.2px;
        // letter-spacing: -0.03em;
        // text-align: left;

    },
    arrowcontainer: {
        marginTop: 100
    },
    wholescreen: {
        alignItems: 'center'
    },
    enterthecode: {
        marginBottom: 24
    },
    otpbox: {
        width: 73.25,
        height: 60,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: 'white'
    },
    code: {
        marginBottom: 12,
        width: 87,
        height: 22,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21.56,
        color: '#7B8293'
    },
    otpcontainer: {
        flexDirection: 'row',
        width: 329,
        height: 60,
        justifyContent: 'space-between',
        marginBottom: 23,
    },
    resend: {
        width: 52,
        height: 22,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21.56,
        color: '#19213D',
        marginBottom: 44
    },
    verifybox: {
        width: 329,
        height: 56,
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#313C4A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    verifytext: {
        color: 'white',
        width: 48,
        height: 21,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20.8,
        letterSpacing: -0.02
    }
})