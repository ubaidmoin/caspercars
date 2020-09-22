import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { FloatButton, Table } from '../components/common';

const clientData = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@gmail.com',
        phoneNo: '332xxxxxxx',
        address: 'California'
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@gmail.com',
        phoneNo: '332xxxxxxx',
        address: 'California'
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@gmail.com',
        phoneNo: '332xxxxxxx',
        address: 'California'
    }
];

const headers = [
    'Name',
    'Email',
    'Contact',
    'Address'
]
const Client = (props) => {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        setClients(clientData);
    }, []);

    return (
        <>
            <ScrollView style={styles.containerStyle}
                contentContainerStyle={styles.scrollViewContentContainerStyle} >
                <View style={styles.topButtonsStyle}>

                </View>
                <View style={styles.tableContainerStyle}>
                
                    {clients &&
                        <Table
                            data={clients}
                            headers={headers}
                            withActions
                        />}
                </View>
            </ScrollView>
            <FloatButton
                iconName="plus"
                onPress={() => props.navigation.navigate('NewClient')}
            />
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
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    tableContainerStyle: {
        flex: 5,
        width: '100%',
        paddingHorizontal: 10
    },
    topButtonsStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: 15
    },
    addContainerTextStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default Client;