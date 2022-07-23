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
   sx
}) {

  return (
      <TextInput 
         editable={editable}
         autoComplete={autoComplete}
         style={{...styles.InputText, ...sx}} 
         placeholder={placeholder} 
         onChangeText={onChangeText}
         keyboardType={keyboardType}
         placeholderTextColor={colors.blackOff}
      />
  )
}

const styles = StyleSheet.create({
   InputText: {
      borderWidth: 2,
      borderColor: colors.blackOff,
      padding:10,
      paddingHorizontal: 15,
      width: sizes.longInput,
      borderRadius: 10,
      margin: 10,
      fontWeight: 'bold',
      fontSize: sizes.regilarText
   }
})