import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Center, Pressable, View } from 'native-base'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'

export default function LongButton({onPress, variant, title, sx}) {
  return (
   // variant === 'outlined' && 
    <Pressable onPress={onPress} m={2} style={{...styles.button__outerContainer, ...sx}}>
      {({isPressed}) => {
         return (
            <View style={{
               ...styles.button__container, 
               backgroundColor: variant === 'outlined'? colors.primarywhite : colors.blackPrimary,
               transform: [{
                  scale: isPressed ? 0.96 : 1
                }],
                opacity: isPressed ? 0.9 : 1
               }}>
               <Center _text={{fontWeight:'bold', letterSpacing:1 }}>
                  <Text style={{
                     ...styles.button__text, 
                     color: variant === 'outlined' ? colors.blackPrimary : colors.primarywhite
                     }}>
                        {title}
                     </Text>
               </Center>
            </View>
         )
      }}
    </Pressable>
  )
}

const styles = StyleSheet.create({
   button__outerContainer : {
      borderWidth: 3, 
      color: colors.blackPrimary,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.blackPrimary
   },
   button__container: {
      width: sizes.longButton,
      padding: 15,
      borderRadius: 10,
   }, 
   button__text: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: sizes.button
   }
})