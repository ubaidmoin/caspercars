import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const drawerItems = [
    { id: 1, name: 'Dashboard', screen: 'Dashboard' },
    { id: 2, name: 'New Booking', screen: 'NewBooking' },
    { id: 3, name: 'Upcoming Booking', screen: 'UpcomingBooking' },
    { id: 4, name: 'Invoices', screen: 'Invoices' },
    { id: 5, name: 'Clients', screen: 'Clients' },
    { id: 6, name: 'Alerts', screen: 'Alerts' },
    { id: 7, name: 'Log out', screen: 'Login' },
]
const DrawerContent = (props) => {
    const userDetails = props.userDetails;

    return (<DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity style={styles.logoutButtonStyle} onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Auth');
        }}>
            <MaterialCommunityIcons
                size={25}
                color="#696565"
                name="exit-to-app"
            />
            <Text style={styles.logoutButtonTextStyle}>Log out</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>)
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical: 10
    },
    itemStyle: {
        marginLeft: 17.5,
        marginVertical: 10,
        color: '#696565',
        fontSize: 15,
        fontWeight: 'bold'
    },
    logoutButtonTextStyle: {
        marginLeft: 25,
        marginVertical: 10,
        color: '#696565',
        fontSize: 14.25,
        fontWeight: 'bold'
    },
    logoutButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 17
    }
})

export default DrawerContent;