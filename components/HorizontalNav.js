import { View, FlatList } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { TodoNavigation } from '../utils/defaultLists'
import NavItem from './NavItem'
import { useNavigation } from '@react-navigation/native';


export default function HorizontalNav() {
  return (
    <View style={styles.navbar__container}>
      <FlatList 
         horizontal={true}
         data={TodoNavigation}
         renderItem={({item}) => <NavItem item={item} /> }
      />
    </View>
  )
}
const styles = StyleSheet.create({
   navbar__container: {
      elevation: 5,
      shadowColor: colors.blackPrimary,
      backgroundColor: colors.primarywhite,
      padding: 5,
   }
})