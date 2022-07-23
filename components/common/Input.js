import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'

export default function Input({
   editable = true, 
   autoComplete, 
   placeholder, 
   onChangeText,
   keyboardType,
   sx,
   name,
   secureTextEntry,
   error,
   value,
}) {

  return (
      <TextInput 
         editable={editable}
         autoComplete={autoComplete}
         style={{
            ...styles.InputText, 
            ...sx, 
            borderColor: (error?.inputName === name && error?.isError) ? colors.redOff : colors.blackOff,
         }} 
         placeholder={(error?.inputName === name && error?.isError) ? error?.message : placeholder} 
         onChangeText={(value) => onChangeText(value, name)}
         keyboardType={keyboardType}
         placeholderTextColor={ (error?.inputName === name && error?.isError) ? colors.redOff :colors.blackOff}
         name={name}
         secureTextEntry={secureTextEntry}
         value={error?.inputName === name && error?.isError ? '': value}
      />
  )
}

const styles = StyleSheet.create({
   InputText: {
      borderWidth: 2,
      padding:10,
      paddingHorizontal: 15,
      width: sizes.longInput,
      borderRadius: 10,
      margin: 10,
      fontWeight: 'bold',
      fontSize: sizes.regilarText
   }
})