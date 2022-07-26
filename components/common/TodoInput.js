import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

export default function TodoInput({style, placeholder ,renderIcon, editable ,onChangeText, multiline}) {
  return (
   <View style={{
      ...style
   }}>
      {
         renderIcon ?
         <View style={styles.iconDisabledInput}>
            {renderIcon()}
            <TextInput 
               editable={editable}
               placeholder={placeholder}
               style={styles.iconDisabledInput1} />
         </View>
         :
         <TextInput
            multiline={multiline}
            style={{
               ...styles.input, 
               height: multiline && 100,
            }}
            editable={editable}
            placeholder={placeholder}
            onChangeText={onChangeText}
         />
      }
   </View>
  )
}

const styles = StyleSheet.create({
   input: {
      borderColor: colors.blackOff,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      // elevation: 1,
      shadowColor: colors.blackOff,
      marginVertical: 10,
      marginHorizontal: 10,
   },
   iconDisabledInput : {
      borderWidth: 1,
      borderColor: colors.blackOff,
      flexDirection: 'row',
      // elevation: 2,
      shadowColor: colors.blackOff,
      borderRadius: 20,
      overflow: 'hidden'
   },
   iconDisabledInput1: {
      flex: 1,
      paddingHorizontal: 5
   }
})