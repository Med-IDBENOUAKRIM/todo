import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Header() {
    return (
        <View style={styles.header} >
            <Text style={styles.title} >Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        paddingTop: 60,
        backgroundColor: 'blue'
    },
    title: {
        fontSize: 45,
        fontWeight: "500",
        textAlign: 'center',
        color: 'white'
    }
})

export default Header
