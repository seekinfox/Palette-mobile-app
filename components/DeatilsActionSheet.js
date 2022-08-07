import { View, Text } from 'react-native'
import React from 'react'
import { Actionsheet } from 'native-base'
import { StyleSheet } from 'react-native'
import { sizes } from '../utils/sizes'
import { colors } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons';

export default function DeatilsActionSheet({isOpen, setIsOpen}) {
   
  return (
   <Actionsheet isOpen={isOpen} onClose={()=> setIsOpen(false)}>
      <Actionsheet.Content>
         <Text style={styles.title}>
         UPDATE STATUS
         </Text>
      </Actionsheet.Content>

      <Actionsheet.Item>
         <View style={styles.item}>
            <FontAwesome name="square" size={40} color={colors.primaryOrange} />
            <Text style={{...styles.text, color:colors.primaryOrange}}>Open</Text>
         </View>
      </Actionsheet.Item>
   
      <Actionsheet.Item>
         <View style={styles.item}>
            <FontAwesome name="square" size={40} color={colors.primaryGreen} />
            <Text style={{...styles.text, color:colors.primaryGreen}}>Completed</Text>
         </View>
      </Actionsheet.Item>
      
      <Actionsheet.Item>
         <View style={styles.item}>
            <FontAwesome name="square" size={40} color={colors.blackWashed} />
            <Text style={{...styles.text, color:colors.blackWashed}}>Closed</Text>
         </View>
      </Actionsheet.Item>
   </Actionsheet>
  )
}

const styles = StyleSheet.create({
   title: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      color: colors.blackPrimary,
      padding:10,
   },
   item: {
      flexDirection: 'row',
      width: 420,
      padding: 5,
      justifyContent: 'flex-start',
      borderRadius: 10,
      alignItems: 'center'
   },
   text: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      marginLeft: 20
   }
})