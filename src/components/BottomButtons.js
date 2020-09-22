import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, TextBase } from 'react-native';

import { ImageButton } from './common';

const BottomButtons = () => (
    <View style={styles.bottomButtons}>
        <ImageButton
            buttonStyle={styles.callButtonStyle}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
            imageSource={require('../assets/walk.png')}
        />
        <ImageButton
            buttonStyle={styles.walkInButtonStyle}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
            imageSource={require('../assets/call.png')}
        />
    </View>
);

const styles = StyleSheet.create({
    bottomButtons: {
        marginTop: 8,
        padding: 10,
        borderRadius: 2,
        height: 140,
        width: Dimensions.get('window').width * .95,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,        
    },
    callButtonStyle: {
        borderWidth: 2,
        borderColor: '#4CB7B8',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    walkInButtonStyle: {
        borderWidth: 2,
        borderColor: 'red',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: '5%'
    },
    textStyle: {
        fontWeight: 'bold',
        marginTop: 10
    },
    imageStyle: {
        width: 60,
        height: 60
    }
})
export { BottomButtons };
