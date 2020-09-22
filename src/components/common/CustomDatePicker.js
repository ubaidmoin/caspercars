import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDatePicker = ({
    datetime,
    onChange
}) => (
        <View style={styles.dobPickerStyle}>
            <Icon
                name="calendar"
                size={20}
            />
            <TouchableOpacity style={styles.datetimeStyle} onPress={onChange}>
                <Text>
                    {datetime}
                    </Text>
            </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
    dobPickerStyle: {
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'grey',
        borderBottomWidth: 1.5,
        width: '95%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        paddingHorizontal: 10,
    },
    datetimeStyle: {
        marginLeft: 5
    }
})

export { CustomDatePicker };
