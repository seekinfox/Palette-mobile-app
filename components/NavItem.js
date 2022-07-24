import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { sizes } from '../utils/sizes'
import { colors } from '../utils/colors'
import { navigateTodo } from '../routes/NestedStacks'

export default function NavItem({item}) {
  
  return (

    <TouchableOpacity onPress={()=> navigateTodo(item.screen)} style={styles.navItem__container}>
       {
        item?.title ? 
        <Text style={styles.text}>{item.title}</Text>
        :
        item.icon
       }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  navItem__container: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.regilarText,
    color: colors.blackPrimary,
    textTransform: 'uppercase'
  }
})