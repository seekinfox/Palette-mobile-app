import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { sizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export default function ModalItemButton({title, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button__container}>
      <View  style={styles.button__inner}>
         {icon}
         <Text  style={styles.text}>{title}</Text>
      </View>
      <AntDesign name="right" size={sizes.mdIcon} color={colors.blackPrimary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   button__container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      padding: 15,
      backgroundColor: colors.whiteWashed,
      marginBottom: 10,
      borderRadius: 10
   },
   text: {
      fontWeight: 'bold',
      color: colors.blackPrimary,
      fontSize: sizes.regilarText,
      marginLeft: 10
   },
   button__inner: {
      flexDirection: 'row',
      alignItems: 'center'
   }
})