import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TableView = ({
    data,
    headers,
    withActions
}) => {

    const renderRow = (item, index) => (
        <View key={index} style={styles.rowContainer}>
            <Text style={styles.column}>{item.title}</Text>
            <Text style={styles.column}>{item.date}</Text>
            <Text style={styles.column}>{item.time}</Text>
            <Text style={styles.column}>{item.city}</Text>
            {withActions && 
            <TouchableOpacity style={{ width: '12%' }}>
                <AntDesign
                    name={"edit"}
                    size={25}
                    color="#C70039"
                />
            </TouchableOpacity>}
        </View>
    );

    return (
        <View style={styles.tableView}>
            <View style={styles.rowContainer}>
                {headers.map((header, index) => <Text key={index} style={styles.header}>{header}</Text>)}
                {withActions && 
                <Text style={styles.actions}>{'Actions'}</Text>}
            </View>
            <FlatList
                data={data}
                nestedScrollEnabled
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderRow(item, index)}
            />
        </View>);
};

const styles = StyleSheet.create({
    tableView: {
        backgroundColor: '#fff',        
        borderRadius: 5,
        paddingVertical: 10
    },
    rowContainer: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#C70039',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    header: {
        fontWeight: 'bold',
        width: '22%'
    },
    column: {
        width: '22%'
    },
    actions: {
        color: '#C70039',
        fontWeight: 'bold',
        width: '14%'
    }
})

export { TableView };
