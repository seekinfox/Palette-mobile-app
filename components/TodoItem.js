import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { sizes } from '../utils/sizes'
import Button from './common/Button'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { navigationRef } from '../routes/MainStack'


export default function TodoItem({item}) {
   
   const handleOnOpen =() => {
      navigationRef('TodoDetails', {id: item.id})
   }
  return (
    <View style={{
      ...styles.todoItem__container, 
      backgroundColor: item.status === 'overdue' ? colors.redOOf : colors.primarywhite
    }}>
      <View style={styles.todoItem__one}>
         {/* date and time */}
         <Text style={styles.dateText}>{item.date}</Text>
         <Text style={styles.timeText}> 6 am</Text>
         {/* todoStatus */}
         <Text style={styles.statusText}>{item.status}</Text>
      </View>

      <View style={styles.todoItem__two}></View>

      <View style={styles.todoItem__three}>
         <View  style={styles.todoItem__three_one}>
            {/* todotype */}
            <Text style={styles.typeText}>{item.type}</Text>
            {/* todo title */}
            <Text style={styles.titleText}>{item.title}</Text>
         </View>
         <View  style={styles.todoItem__three_two}>
            {/* links and docs */}
            <View  style={styles.todoItem__three_twoInner}>
               <Ionicons style={{marginRight: 10}} name="document-sharp" size={sizes.smallIocon} color="black" />
               <Feather name="link-2" size={sizes.smallIocon} color="black" />
            </View>
            {/* button */}
            <Button onPress={handleOnOpen} title='OPEN' />
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   todoItem__container: {
      height: 120,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 1,
      shadowColor: colors.blackOff,
   },
   todoItem__one : {
      height: '100%',
      padding: 10,
      flex: .5,
      justifyContent: 'space-evenly'
   },
   dateText: {
      fontWeight: 'bold',
      color: colors.blackPrimary,
      fontSize: sizes.regilarTextSmall
   },
   timeText: {
      fontWeight: 'bold',
      color: colors.blackPrimary,
      fontSize: sizes.regilarTextSmall,
      opacity: .8
   },
   statusText : {
      fontWeight: 'bold',
      fontSize: sizes.regilarEm,
      textTransform:'uppercase'
   }, 
   todoItem__two: {
      flex: .3,
   },
   todoItem__three: {
      height: '100%',
      flex: 1,
      padding: 10
   },
   typeText: {
      color: colors.primaryPurple,
      fontSize: sizes.regilarEm,
      fontWeight: 'bold',
      textTransform: 'capitalize'
   },
   titleText: {
      fontWeight: 'bold',
      fontSize: sizes.regilarTextSmall,
      textTransform: 'capitalize',
      color: colors.blackPrimary,
   },
   todoItem__three_one: {
      flex: 1,
   },
   todoItem__three_two : {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
   },
   todoItem__three_twoInner:{
      flex: 1,
      flexDirection:'row'
   }
})