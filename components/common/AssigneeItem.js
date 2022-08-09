import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { Avatar } from 'native-base'
import { StyleSheet } from 'react-native'
import { sizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'


export default function AssigneeItem({style, item, onPress, selected}) {
   const isSelected = useMemo(() => {
      return selected.includes(item._id)
   }, [selected])

  return (
   <TouchableOpacity onPress={()=> onPress(item._id)}>
      <View style={{
         ...styles.item, 
         ...style,
         backgroundColor: isSelected ? colors.blackWashed : colors.whiteWashed, 
         }}>
         <Avatar size={'md'} />
         <View style={styles.item__innerone}>
            <Text style={{
               ...styles.text,
               color: isSelected ? colors.whiteWashed : colors.blackWashed,

            }}>{item?.email}</Text>
            <Text style={{
               ...styles.text1,
               color: isSelected ? colors.whiteWashed : colors.blackWashed,

            }}>{item?.role || "User role"}</Text>
         </View>
      </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   item: {
      flexDirection: 'row',
      width: 420,
      padding: 10,
      justifyContent: 'flex-start',
      borderRadius: 10,
      alignItems: 'center',
      borderRadius: 15,
   },
   text: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      marginLeft: 20,
   },

   text1: {
      fontWeight: 'bold',
      fontSize: sizes.regilarTextSmall,
      marginLeft: 20,
      opacity: .5
   },
   item__innerone: {
      flex: 1
   }
})