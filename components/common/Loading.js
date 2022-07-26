import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Center, Spinner } from 'native-base'

export default function Loading({size = 'lg', style}) {
  return (
    <Center style={style}>
       <Spinner style={styles.icon} size={size} color="emerald.500" />
    </Center>
  )
}

const styles = StyleSheet.create({
   icon : {
      transform: [{
         scale: 1.8
      }]
   }
})