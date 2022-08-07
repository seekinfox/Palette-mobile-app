import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Center, Pressable, View } from 'native-base'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'
import Loading from './Loading'

export default function LongButton({onPress, variant, title, sx, sxInner, textStyle, loading}) {
  return (
    <Pressable onPress={onPress} m={2} style={{...styles.button__outerContainer, ...sx}}>
      {({isPressed}) => {
         return (
            <View style={{
               ...styles.button__container, 
               backgroundColor: variant === 'outlined'? colors.primarywhite : colors.blackPrimary,
               transform: [{
                  scale: isPressed ? 0.96 : 1
                }],
                opacity: isPressed ? 0.9 : 1,
                ...sxInner
               }}>
               <Center _text={{fontWeight:'bold', letterSpacing:1 }}>
                  {
                     loading ? <Loading style={{paddingVertical: 3}} size='sm' /> :
                     
                     <Text style={{
                     ...styles.button__text, 
                     color: variant === 'outlined' ? colors.blackPrimary : colors.primarywhite,
                     ...textStyle
                     }}>
                        {title}
                     </Text>}
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
      backgroundColor: colors.blackPrimary,
      justifyContent:'center',
      alignItems: 'center',
      width: sizes.longButton,
   },
   button__container: {
      width: '100%',
      padding: 15,
      borderRadius: 10,
      justifyContent:'center',
      alignItems: 'center'
   }, 
   button__text: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: sizes.button
   }
})