import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FloatButton = ({
    iconName,
    onPress
}) => (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <AntDesign
                name={iconName}
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        padding: 10,
        backgroundColor: '#C70039',
        borderRadius: 50,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#000',
        shadowOpacity: 0.7,
        elevation: (Platform.OS === "android") ? 5 : null
    }
})

export { FloatButton };