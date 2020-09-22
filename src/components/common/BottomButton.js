import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BottomButton = ({
    title,
    onPress
}) => (    
        <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
            <Text style={styles.textStyle}>
                {title}
            </Text>
        </TouchableOpacity>    
);

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#C70039',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})

export { BottomButton };