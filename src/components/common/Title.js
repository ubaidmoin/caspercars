import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = ({
    title
}) => (
    <View style={styles.containerStyle}>        
        <Text style={styles.textStyle}>
            {title.toUpperCase()}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        paddingBottom: 10
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#C70039'
    }
})
export { Title };
