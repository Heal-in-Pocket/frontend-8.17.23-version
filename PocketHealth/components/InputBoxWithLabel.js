import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import scaleWidth from './scaleWidth';
import scaleHeight from './scaleHeight';
import scaleFont from './scaleFont';


const InputBoxWithLabel = ({ label, value, onChangeText, placeholder, width, ...props }) => {
  return (
    <View style={[styles.inputContainer,{width:width}]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.inputField}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#7C7C7C'
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {    
    marginBottom: hp("1%"), 
  },
  inputLabel: {
  marginBottom: hp("0.5%"),
  fontSize: scaleFont(16),
  fontWeight: 'bold',
  },
  inputField: {
    height: hp("7%"),
    borderWidth: 2,
    borderColor: '#7C7C7C',
    borderRadius: 10,
    paddingHorizontal: wp("2%"),    
    fontSize: scaleFont(20),
    backgroundColor: '#FFFFFF'
  },
});

export default InputBoxWithLabel;
