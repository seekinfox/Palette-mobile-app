import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { sizes } from '../../utils/sizes'

export default function LinkButton({title, onPress, sx}) {
  return (
    <TouchableOpacity style={{...styles.link__container, ...sx,}} onPress={onPress}>
      <Text style={styles.linktext}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
   link__container :{
      paddingHorizontal: 10
   },
   linktext : {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
   }
})