import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';

const WelcomeScreen = ({ navigation }) => {
    const animatedValue = new Animated.Value(0);
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000)
    }, []);

    const scale = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const animatedStyle = {
        transform: [{ scale }]
    };

    return (
        <View style={styles.container}>
            <View style={styles.splashBox}>
                <Animated.Text style={[styles.heading, animatedStyle]}>Welcome to Daniel Eefhulsman</Animated.Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    splashBox: {
        backgroundColor: "#F1FADA",
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    heading: {
        color: '#265073',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default WelcomeScreen