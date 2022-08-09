import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { sizes } from '../../utils/sizes'
import { Box, Pressable } from 'native-base'
import { colors } from '../../utils/colors'

export default function IconButton({onPress, sx, sxContainer ,color, renderIcon, title}) {
  return (
    <Pressable style={{...styles.pressable, ...sxContainer}} onPress={onPress}>
      {({
        isPressed
      }) => {
         return  <View 
            style={{...styles.button__container,
               ...sx,
               transform: [{
                  scale: isPressed ? 0.90 : 1
                }]
            }}>
               {
                  title ? 
                     <Text 
                        style={{
                           color: color, 
                           ...styles.text 
                        }}>
                           {title}
                     </Text> : 
                  <View style={styles.icon}>{renderIcon()}</View>
               }
            </View>
         
      }}
    </Pressable>
  )
}
const styles = StyleSheet.create({
   button__container: {
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 100,
      padding : 5,
      elevation: 5,
      minWidth: 45,
      minHeight: 45,
      shadowColor: 'black',
      backgroundColor: colors.primarywhite,
   },
   text: {
      fontWeight: 'bold',
      padding:5,
      paddingHorizontal: 15,
      fontSize: sizes.smallButton
   },
   icon : {
      width: 35,
      justifyContent:'center',
      alignItems:'center'
   },
   pressable : {
      justifyContent:'center',
      alignItems: 'center',
   }
})