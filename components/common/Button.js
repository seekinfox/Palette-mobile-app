import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

export default function Button({
   title, 
   transparent = true,
   onPress,
   textStyle,
   buttonStyle,
}) {
  return (
   <TouchableOpacity 
      onPress={onPress} 
      style={{
         ...styles.button__container,
         ...buttonStyle
      }}>
      <Text style={{...styles.title, ...textStyle}}>{title}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   button__container: {
      padding: 7,
      backgroundColor: 'transparent',
      justifyContent:'center',
      alignItems: 'center'
   },
   title: {
      fontWeight: 'bold',
      color: colors.primaryOrange
   }
})