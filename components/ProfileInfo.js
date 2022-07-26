import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { Avatar, Heading, VStack } from 'native-base'
import { sizes } from '../utils/sizes'
import LongButton from './common/LongButton'
import Button from './common/Button'

export default function ProfileInfo() {
  return (
    <View style={styles.profile__containerMain}>
      <View style={styles.profile__container}>
      <Avatar size={100} mr={10} />
      <View style={styles.profile__innerContainer}>
         <Heading color={colors.blackPrimary} size='lg'>spicer pro</Heading>
         <View style={styles.profile__innerOne}>
            <Text style={styles.profile__innerSmallText}>24 yrs</Text>
            <Text style={styles.profile__innerSmallText}>.</Text>
            <Text style={styles.profile__innerSmallText}>male</Text>
            <Text style={styles.profile__innerSmallText}>.</Text>
            <Text style={styles.profile__innerSmallText}>CA</Text>
         </View>
      </View>
      </View>
      <Button
         buttonStyle={{
            padding: 15,
            marginTop: 20,
            backgroundColor: colors.whiteWashed,
            borderRadius: 10
         }}
         textStyle={{
            color:colors.blackPrimary,
            textTransform: 'capitalize'
         }}
         title='edit Profile'/>
    </View>
  )
}

const styles = StyleSheet.create({
   profile__containerMain: {
      paddingHorizontal: 50,
      padding: 15,
      backgroundColor: colors.primarywhite,
   },
   profile__container: {
      flexDirection: 'row',
      justifyContent:'space-between'
   },
   profile__innerContainer: {
      flex: 1,
      justifyContent: 'space-evenly'
   },
   profile__innerOne: {
      flexDirection: 'row',
   },
   profile__innerSmallText: {
      fontSize: sizes.regilarTextSmall,
      fontWeight: 'bold',
      color: colors.blackPrimary,
      opacity: .8,
      marginRight: 10,
      textTransform: 'capitalize'
   }
})