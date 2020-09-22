import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({
  value,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  onChangeText,
  iconName,
  editable,
  keyboardType
}) => (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={20}
      />
      <TextInput
        style={styles.textInputStyle}
        secureTextEntry={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );

const styles = StyleSheet.create({
  inputContainer: {
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
  },
  textInputStyle: {    
    fontSize: 15,
    marginLeft: 5
  }
})

export { Input };
