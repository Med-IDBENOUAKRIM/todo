import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function TodoItems({ item, pressHandler }) {
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
            <View style={styles.container}>
                <Button title="x" color="red" onPress={() => pressHandler(item.key)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 35,
        position: "absolute",
        right: 10,
        top: 10,
    },
    item: {
        position: "relative",
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 12,
        marginBottom: 15,
        borderColor: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        
    }
})

export default TodoItems
