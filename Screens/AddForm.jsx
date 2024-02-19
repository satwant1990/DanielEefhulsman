import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


function AddForm() {
    return (
        <View style={styles.container}>
            <View style={styles.splashBox}>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Event Date</Text>
                        <TextInput placeholder='Event Date' style={styles.inputs} />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    form: {
        padding: 10
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#1e1e1e"
    },
    inputs: {
        borderWidth: 1,
        borderColor: "#d5d5d5",
        padding: 10,
        color: "#1e1e1e"
    },
});

export default AddForm