import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import homeIcon from '../Assets/images/homeicon.png'
import settingIcon from '../Assets/images/settingicon.png'
import addIcon from '../Assets/images/addicon.png'
const homeIconUri = Image.resolveAssetSource(homeIcon).uri
const settingIconUri = Image.resolveAssetSource(settingIcon).uri
const addIconUri = Image.resolveAssetSource(addIcon).uri
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation();
    const homeIconHandler = () => {
        console.log('home btn clicked')
    }
    const settingIconHandler = () => {
        console.log('setting btn clicked')
    }
    const addIconHandler = () => {
        console.log('Add btn clicked')
        navigation.navigate('AddForm')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={homeIconHandler}>
                <Image
                    source={{ uri: homeIconUri }}
                    style={styles.headerIcons}
                />
            </TouchableOpacity>
            <Text style={styles.heading}>Daniel Eefhulsman</Text>
            <TouchableOpacity onPress={settingIconHandler}>
                <Image
                    source={{ uri: settingIconUri }}
                    style={styles.headerIcons}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={addIconHandler}>
                <Image
                    source={{ uri: addIconUri }}
                    style={styles.headerIcons}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#FDBF60",
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    heading: {
        fontSize: 18,
        color: "#402B3A",
        textTransform: "uppercase",
        fontWeight: "600"
    },
    headerIcons: {
        width: 30,
        height: 30
    }
});
export default Header