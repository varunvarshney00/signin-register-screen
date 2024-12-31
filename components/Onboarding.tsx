import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import onboardingslides from '../onboardingscreens/onboardingslides'
import OnboardingItem from './OnboardingItem'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../src/App'
import AsyncStorage from '@react-native-async-storage/async-storage'




const Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatlistRef = useRef(null);
    const navigation = useNavigation();

    const handleNext = async () => {
        if (currentIndex < onboardingslides.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatlistRef.current.scrollToIndex({ index: nextIndex });
        }
        else {
            await AsyncStorage.setItem('hasShownOnboarding', 'true');
            navigation.replace('Login');
        }
    };

    return (
        <View>
            <FlatList
                data={onboardingslides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                ref={flatlistRef}
                scrollEnabled={false}
                keyExtractor={(_, index) => index.toString()}
            />
            <View>
                <Button
                    title={currentIndex === onboardingslides.length - 1 ? 'Continue' : 'Next'}
                    onPress={handleNext}
                />
            </View>
        </View>

    )
}

export default Onboarding

const styles = StyleSheet.create({})