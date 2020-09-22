import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';

import { Button, TableView, Title } from '../components/common';

const data = [
    {id: 1, title: 'Test 1', date: '22/11/2020', time: '10:00 PM', city: 'Barbados'},
    {id: 2, title: 'Test 2', date: '25/07/2020', time: '05:00 PM', city: 'New York'},
    {id: 3, title: 'Test 3', date: '12/01/2021', time: '12:00 AM', city: 'Shangai'},
];

const Dashboard = (props) => {
    const tableHead = ['Name', 'Date', 'Time', 'Destination'];
    const [tableData, setTableData] = useState(data);
    return (
        <ScrollView 
        style={styles.containerStyle} 
        contentContainerStyle={styles.scrollViewContentContainerStyle} >
            <View style={styles.topButtonsStyle}>
                <Button
                    name="Card Payment"
                // onPress={() => props.navigation.navigate('Dashboard')}
                />
                <Button
                    name="New Booking"
                    onPress={() => props.navigation.navigate('NewBooking')}
                />
            </View>
            <View style={styles.tableContainerStyle}>
                <Title title={'Upcoming Bookings'} />
                {tableData &&
                    <TableView 
                    data={tableData}
                    headers={tableHead}
                    withActions={false}
                    />}
            </View>
        </ScrollView>
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
        width: '100%', 
        flex: 5, 
        paddingHorizontal: 10
    },
    topButtonsStyle: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', flex: 1, paddingVertical: 15
    },
    addContainerTextStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default Dashboard;