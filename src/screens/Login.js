import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from '../components/common';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            {/* <StatusBar barStyle="dark-content" /> */}            
            <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
                <ImageBackground
                    source={require('../assets/cclogo.jpg')}
                    style={styles.imageStyle}
                />
                <View style={{ width: '80%' }}>
                    <Input
                        placeholder='Email'
                        iconName="mail"
                        secureTextEntry={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <Input
                        placeholder='Password'
                        iconName="lock"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                </View>

                <Button
                    name="login"
                    onPress={() => props.navigation.navigate('AppDrawer')}
                />
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageStyle: {
        width: 300,
        height: 300
    },
    textInputStyle: {
        width: '80%',
        height: 40
    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#F4F6F8',
        borderWidth: 1,
        width: '80%',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#F4F6F8',
    }
})
export default Login;
