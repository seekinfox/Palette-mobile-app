import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'

export default function AddFileButton({onPress, style}) {
  return (
    <TouchableOpacity style={{...styles.addfilebutton__container, ...style}} onPress={onPress}>
      <Text style={styles.text}>Upload Resource</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
   addfilebutton__container:{
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      height: 100,
      borderRadius: 10,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: colors.blackPrimary
   },
   text: {
      fontWeight: 'bold',
      color: colors.blackOff,
      fontSize: sizes.button
   }
})