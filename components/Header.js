import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { Avatar, Heading } from 'native-base'
import IconButton from './common/IconButton'
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { sizes } from '../utils/sizes'
import { useNavigation } from '@react-navigation/native'

export default function Header({title}) {
   const navigation = useNavigation()
  return (
    <View style ={styles.header__container}>
         <View style={styles.header__innerOne}>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
               <Avatar size='lg' />
            </TouchableOpacity>
            <Heading color={colors.blackPrimary} size="md">{title}</Heading>
            <IconButton 
               renderIcon={() => <AntDesign name="search1" size={24} color={colors.primaryText} /> } />
         </View>
         <View style={styles.header__innerTwo}>
         <IconButton 
            sxContainer={{marginRight: 15}}
            renderIcon={() => <FontAwesome5 
               name="sort-amount-up" 
               size={sizes.smallIocon} 
               color={colors.primaryText} /> 
               } />
         <IconButton 
            sxContainer={{marginRight: 15}}
            renderIcon={() => <FontAwesome 
               name="filter" 
               size={sizes.smallIocon} 
               color={colors.primaryText} /> 
            } />
         <IconButton color={colors.primaryText} title="By me" />
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
   header__container: {
      backgroundColor: colors.primarywhite,
      paddingTop: 40,
      paddingBottom: 10,
      paddingHorizontal: 40,
   },
   header__innerOne : {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'

   },
   header__innerTwo: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end'
   }
})