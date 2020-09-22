import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import NewBookings from '../screens/NewBookings';
import Clients from '../screens/Clients';
import NewClient from '../screens/NewClient';
import DrawerContent from '../components/common/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderWithMenu = ({ title }, navigation) => ({
  title: title,
  headerTitleStyle: {
    color: '#fff'
  },
  headerStyle: {
    backgroundColor: '#C70039',
  },
  headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <FeatherIcon
      style={{ marginLeft: 10 }}
      name="menu"
      size={25}
      color={'#fff'}
    />
  </TouchableOpacity>)
})

const HeaderWithBackButton = ({ title }, navigation) => ({
  title: title,
  headerTitleStyle: {
    color: '#fff'
  },
  headerStyle: {
    backgroundColor: '#C70039',
  },
  headerLeft: () => (<TouchableOpacity onPress={() => navigation.pop()}>
    <FeatherIcon
      style={{ marginLeft: 10 }}
      name="chevron-left"
      size={25}
      color={'#fff'}
    />
  </TouchableOpacity>)
})

const drawerStyles = {
  activeTintColor: '#C70039',
  labelStyle: {
    fontWeight: 'bold'
  }
}

const noBackButton = {
  headerLeft: () => null,
  headerStyle: {
    backgroundColor: '#C70039',
  },
  headerTitleStyle: {
    color: 'white'
  }
}

const headerStyle = (title) => ({
  headerStyle: {
    backgroundColor: '#C70039',
  },
  headerTitleStyle: {
    color: 'white'
  },
  headerLeftContainerStyle: {
    color: 'white'
  },
  title: title,
  headerTintColor: 'white'
})

const lockedDrawerOptions = ({ title }) => ({
  title: title,
  drawerLockMode: 'locked-closed',
  gestureEnabled: false
})

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard}
      options={({ navigation }) => HeaderWithMenu({ title: 'Dashboard' }, navigation)} />
  </Stack.Navigator>
)

const NewBookingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="NewBooking" component={NewBookings}
      options={({ navigation }) => HeaderWithMenu({ title: 'New Booking' }, navigation)}
    />
  </Stack.Navigator>
)

const UpcomingBookingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UpcomingBooking" component={NewBookings}
      options={({ navigation }) => HeaderWithMenu({ title: 'Upcoming Booking' }, navigation)}
    />
  </Stack.Navigator>
)

const InvoicesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Invoices" component={NewBookings}
      options={({ navigation }) => HeaderWithMenu({ title: 'Invoices' }, navigation)}
    />
  </Stack.Navigator>
)

const ClientsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Clients" component={Clients}
      options={({ navigation }) => HeaderWithMenu({ title: 'Clients' }, navigation)}
    />
    <Stack.Screen name="NewClient" component={NewClient}
      options={({ navigation }) => HeaderWithBackButton({ title: 'Add Client' }, navigation)}
    />
  </Stack.Navigator>
)

const AlertsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Alerts" component={NewBookings}
      options={({ navigation }) => HeaderWithMenu({ title: 'Alerts' }, navigation)}
    />
  </Stack.Navigator>
)

const AppDrawer = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerContentOptions={drawerStyles}>
    <Drawer.Screen name="Dashboard"
      component={DashboardStack}
      options={{
        title: 'Dashboard',
        drawerIcon: ({ color }) => <MaterialCommunityIcons name="view-dashboard" color={color} size={25} />
      }} />
    <Drawer.Screen
      name="NewBooking"
      component={NewBookingsStack}
      options={{
        title: 'New Booking',
        drawerIcon: ({ color }) => <MaterialCommunityIcons name="book-multiple-plus" color={color} size={25} />
      }} />
    <Drawer.Screen
      name="UpcomingBooking"
      component={UpcomingBookingStack}
      options={{
        title: 'Upcoming Booking',
        drawerIcon: ({ color }) => <MaterialCommunityIcons name="chevron-double-up" color={color} size={25} />
      }} />
    <Drawer.Screen
      name="Invoices"
      component={InvoicesStack}
      options={{
        title: 'Invoices',
        drawerIcon: ({ color }) => <FontAwesome5 name="file-invoice" color={color} size={25} />
      }} />
    <Drawer.Screen
      name="Clients"
      component={ClientsStack}
      options={{
        title: 'Clients',
        drawerIcon: ({ color }) => <FontAwesome5 name="users" color={color} size={25} />
      }} />
    <Drawer.Screen
      name="Alerts"
      component={AlertsStack}
      options={{
        title: 'Alerts',
        drawerIcon: ({ color }) => <MaterialCommunityIcons name="alert" color={color} size={25} />
      }} />
  </Drawer.Navigator>
)

const Auth = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Login" component={Login} options={lockedDrawerOptions} />
  </Drawer.Navigator>
)

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Auth" component={Auth} options={lockedDrawerOptions} />
        <Drawer.Screen name="AppDrawer" component={AppDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;