import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaViewAndroid = ({ Component, ...rest }) => {
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <SafeAreaView>
                <Component />
            </SafeAreaView>
        </View>
    )
}

export default SafeAreaViewAndroid