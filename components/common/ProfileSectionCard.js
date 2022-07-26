import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'

export default function ProfileSectionCard({item, itemHeight}) {
  return (
    <View style={{...styles.card__container, height: itemHeight}}>
      {
         item?.title && <Text style={styles.titleText}>{item?.title}</Text>
      }
      {
         item?.addIcon && 
         <TouchableOpacity style={styles.addIcon}>
            {item.addIcon}
         </TouchableOpacity>
      }
      {
         item?.icon &&
         item.icon
      }
      {
         item?.degree &&
         <Text style={styles.subtitleText}>{item.degree}</Text>
      }
      {
         item?.position && 
         <View>
            <Text style={styles.subtitleText}>{item.position}</Text>
            <Text style={styles.subtitle1Text}>{item.dateStart}-{item.dateEnd}</Text>
         </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
 card__container: {
   padding: 25,
   elevation: 5,
   shadowColor: colors.blackOff,
   justifyContent: 'space-around',
   alignItems: 'flex-start',
   borderRadius: 19,
   margin: 5,
 },
 titleText: {
   fontWeight: 'bold',
   color: colors.blackPrimary,
   fontSize: sizes.regilarText,
 },
 subtitleText: {
   fontWeight: 'bold',
   color: colors.blackPrimary,
   fontSize: sizes.regilarTextSmall,
   opacity: .7
 },
 subtitle1Text: {
   fontWeight: 'bold',
   color: colors.blackPrimary,
   fontSize: sizes.regilarEm,
   opacity: .6
 },
 addIcon: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center'
 }
})