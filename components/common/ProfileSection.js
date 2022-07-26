import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import ProfileSectionCard from './ProfileSectionCard'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'

export default function ProfileSection({type, data, itemHeight}) {
  return (
    <View style={styles.profileSection__container} >
      <View style={styles.profileSection__innerOne}>
         {type?.icon && type.icon}
         {  
            type?.title &&
            <Text style={styles.titleText}>{type?.title}</Text>
         }
      </View>
      <View style={styles.profileSection__innerTwo}>
         <FlatList 
            horizontal
            data={data}
            renderItem={({item})=> <ProfileSectionCard itemHeight={itemHeight} item={item}/>}
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   profileSection__container: {
      padding: 15,
   },
   profileSection__innerOne: {
      flexDirection: 'row'
   },
   titleText: {
      fontWeight: 'bold',
      color: colors.blackPrimary,
      opacity: .7,
      fontSize: sizes.regilarText,
      marginLeft: 10,
      paddingBottom: 15
   },
   profileSection__innerTwo: {
   },
})