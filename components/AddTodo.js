import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const handleChange = val => {
        setText(val)
    }

    return (
        <View style={styles.container} >
            <Text>New todo : </Text>
            <TextInput 
                placeholder="Enter a new todo..."
                onChangeText={handleChange}
                style={styles.input}
            />
            <Button title="Add todo" color="green" onPress={() => submitHandler(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        margin: "auto",
        marginLeft: 23,
        marginTop: 8,
    },
    input: {
        marginTop: 5,
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    }
})