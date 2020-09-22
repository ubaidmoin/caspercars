import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, name }) => (
    <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}>
        <Text style={styles.textStyle}>{name.toUpperCase()}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#C70039',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        paddingHorizontal: 15        
    }
})
export { Button };
