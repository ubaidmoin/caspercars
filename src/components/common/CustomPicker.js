import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-community/picker';

const CustomPicker = ({
    placeholder,
    iconName,
    visible,
    onShowPicker,
    onClosePicker,
    radioGroup,
    onValueChange,
    value
}) => (
        <>
            <TouchableOpacity style={styles.containerStyle} onPress={onShowPicker}>
                <Icon
                    name={iconName}
                    size={20}
                />
                {Platform.OS === "ios" ? 
                <Text style={(value === '') ? styles.placeholderStyle : styles.labelStyle}>{(value === '') ? placeholder : value}</Text> :
                <Picker 
                    style={styles.pickerStyle}
                    selectedValue={value} 
                    onValueChange={onValueChange}>
                        {radioGroup.map((radio, index) => <Picker.Item key={index} label={radio.label} value={radio.value} />)}                        
                    </Picker>
                }
                {Platform.OS === "ios" && <Icon
                    name="angle-down"
                    size={20}
                />}
            </TouchableOpacity>
            {Platform.OS === "ios" && <Modal visible={visible} transparent animationType="slide">
                <View style={styles.pickerContainerStyle}>
                    <View style={styles.divider}>
                        <TouchableOpacity style={styles.doneButtonStyle} onPress={onClosePicker}>
                            <Text style={styles.doneTextStyle}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <Picker 
                    style={styles.pickerStyle}
                    selectedValue={value} 
                    onValueChange={onValueChange}>
                        {radioGroup.map((radio, index) => <Picker.Item key={index} label={radio.label} value={radio.value} />)}                        
                    </Picker>
                </View>
            </Modal>}
        </>
    );

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'grey',
        borderBottomWidth: 1.5,
        width: '95%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    pickerContainerStyle: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 250,
        backgroundColor: '#fff',
        alignItems: 'center',   
        justifyContent: 'flex-start',     
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: '100%'
    },
    doneButtonStyle: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 10
    },
    doneTextStyle: {
        fontWeight: 'bold',
        color: '#C70039',
        fontSize: 16
    },
    placeholderStyle: {
        width: '90%',
        color: 'lightgrey'
    },
    labelStyle: {
        width: '90%',
    },
    pickerStyle: {
        height: 150,
        width: '100%'
    }
})

export { CustomPicker };
