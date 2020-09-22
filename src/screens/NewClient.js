import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Dimensions, ScrollView, TouchableOpacity, Image, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { CustomPicker, Button, Input, CustomDatePicker } from '../components/common';

const salvations = [
    { label: 'Select Salvation', value: '' },
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Miss', value: 'Miss' }
]
const NewClient = () => {
    const [salvation, setSalvation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [dob, setDOB] = useState(null);
    const [pickupAddress, setPickupAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    const [showPicker, setShowPicker] = useState(false);

    const showMode = currentMode => {
        if (Platform.OS === "ios") {
            setModal(true);
        } else {
            setShow(true);
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShow(Platform.OS === 'ios');
        setDOB(currentDate);
    };

    return (
        <>
            <KeyboardAvoidingView behavior="position" style={styles.containerStyle}>
                <ScrollView contentContainerStyle={styles.scrollViewContentContainerStyle} >
                    {/* <KeyboardAvoidingView behavior="position"> */}
                    <View style={styles.cardStyle}>
                        <View style={styles.logoContainerStyle}>
                            <View style={styles.logoStyle}>
                                <Image
                                    source={require("../assets/cclogo.jpg")}
                                    style={styles.imageStyle}
                                />
                            </View>
                        </View>
                        <CustomPicker
                            iconName="transgender"
                            placeholder={'Select Salvation'}
                            visible={showPicker}
                            radioGroup={salvations}
                            value={salvation}
                            onShowPicker={() => setShowPicker(true)}
                            onClosePicker={() => setShowPicker(false)}
                            onValueChange={(itemValue, itemIndex) => setSalvation(itemValue)}
                        />
                        <Input
                            placeholder='First Name'
                            iconName="user"
                            secureTextEntry={false}
                            autoCapitalize="words"
                            value={firstName}
                            onChangeText={firstName => setFirstName(firstName)}
                            editable
                            keyboardType={"default"}
                        />
                        <Input
                            placeholder='Last Name'
                            iconName="user"
                            secureTextEntry={false}
                            autoCapitalize="words"
                            value={lastName}
                            onChangeText={lastName => setLastName(lastName)}
                            editable
                            keyboardType={"default"}
                        />
                        <Input
                            placeholder='Phone Number'
                            iconName="phone"
                            secureTextEntry={false}
                            autoCapitalize="words"
                            value={phoneNo}
                            onChangeText={phoneNo => setPhoneNo(phoneNo)}
                            editable
                            keyboardType={"number-pad"}
                        />
                        <Input
                            placeholder='Email'
                            iconName="mail"
                            secureTextEntry={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={email => setEmail(email)}
                            editable
                            keyboardType={"default"}
                        />
                        <CustomDatePicker
                            datetime={dob ? dob.toDateString() : 'Select Date of Birth'}
                            onChange={showDatepicker}
                        />
                        <Input
                            placeholder='Address'
                            iconName="target"
                            secureTextEntry={false}
                            autoCapitalize="none"
                            value={pickupAddress}
                            onChangeText={pickupAddress => setPickupAddress(pickupAddress)}
                            editable
                            keyboardType={"default"}
                        />
                        <Input
                            placeholder='Post Code'
                            iconName="target"
                            secureTextEntry={false}
                            autoCapitalize="none"
                            value={postcode}
                            onChangeText={postcode => setPostcode(postcode)}
                            editable
                            keyboardType={"number-pad"}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                name="Add Client"
                            />
                        </View>
                    </View>
                    {/* </KeyboardAvoidingView> */}
                </ScrollView>
            </KeyboardAvoidingView>
            {(Platform.OS === "ios") ? (<Modal visible={modal} transparent animationType="slide">
                <View style={styles.dateTimePickerStyle} >
                    <View style={styles.divider}>
                        <TouchableOpacity style={styles.doneButtonStyle} onPress={() => setModal(false)}>
                            <Text style={styles.doneTextStyle}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        value={dob ? dob : new Date()}
                        mode={mode}
                        onChange={onChange}
                    />
                </View>
            </Modal>) : show && (<DateTimePicker
                value={dob ? dob : new Date()}
                mode={mode}
                onChange={onChange}
            />)}
        </>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    scrollViewContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyle: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        width: Dimensions.get('window').width * .9,
        marginTop: 70,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    dobPickerStyle: {
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'grey',
        borderBottomWidth: 1.5,
        width: '95%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    dateTimePickerStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
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
    logoContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    logoStyle: {
        padding: 10,
        height: 110,
        width: 110,
        borderRadius: 55,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -70,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: Platform.OS === "android" ? 5 : null
    },
    imageStyle: {
        height: 75,
        width: 75
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: '100%'
    }
})

export default NewClient;