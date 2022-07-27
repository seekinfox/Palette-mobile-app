import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ProfileTopbar from '../../components/ProfileTopbar'
import { Heading } from 'native-base'
import LongButton from '../../components/common/LongButton'
import { colors } from '../../utils/colors'
import { EvilIcons } from '@expo/vector-icons';
import { sizes } from '../../utils/sizes'
import { Ionicons } from '@expo/vector-icons';
import { links } from '../../utils/defaultLists'
import Links from '../../components/common/Links'
import DeatilsActionSheet from '../../components/DeatilsActionSheet'


export default function TodoDetails({navigation}) {
   const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={styles.todoDetails__container}>
      <ProfileTopbar navigation={navigation} />
      <View style={styles.todoDetails__head}>
         <Heading color={colors.blackWashed}>Apply to Montgomery College</Heading>
         <View style={styles.head__one}>
            <Text style={styles.subtitle1}>LISTED BY</Text>
            <Text style={styles.subtitle2}>
               <EvilIcons name="pencil" size={sizes.smallIocon} color={colors.blackPrimary} />
               You, at 6:00pm, May 05 2021
            </Text>
         </View>
         <View style={styles.head__two}>
            <LongButton 
               onPress={()=> setIsOpen(true)}
               sx={{
                  width: 'auto', 
                  flex: 1, 
                  backgroundColor: colors.primaryRed,
                  borderColor: colors.primaryRed
               }}
               sxInner={{backgroundColor: colors.primaryRed}}
               title='romoved' />
            <View style={styles.head__two_one}>
               <Text  style={styles.subtitle3}>COMPLETE BY</Text>
               <Text  style={styles.subtitle4}>6:00 am, Jun 20 2021</Text>
            </View>
         </View>
      </View>
      <View style={styles.todoDetails__innerTodo}>
         <View style={styles.todoDetails__description}>
            <Text style={styles.subtitle5}>DESCRIPTION</Text>
            <Text style={styles.subtitle6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar interdum ullamcorper. Integer tempus molestie facilisis. Fusce nibh diam, feugiat et tortor non, interdum placerat lectus...
            </Text>
         </View>
         <View style={styles.todoDetails__innerSection}>
            <Text style={styles.subtitleHeader}>
               <Ionicons name="document" size={sizes.smallIocon} color={colors.blackWashed}/>
               RESOURCES
            </Text>
            <View style={styles.section__container}>

            </View>
         </View>
         <View style={styles.todoDetails__innerSection}>
            <Text style={styles.subtitleHeader}>
               <Ionicons name="document" size={sizes.smallIocon} color={colors.blackWashed}/>
               Links
            </Text>
            <View style={styles.section__container}>
               {
                  links.map(item => <Links key={item.id} title={item.title} link={item.url} />)
               }
            </View>
         </View>
      </View>
      <DeatilsActionSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </View>
  )
}

const styles = StyleSheet.create({
   todoDetails__container: {
      flex: 1,
      backgroundColor: colors.primarywhite,
   },
   todoDetails__head:{
      paddingLeft: 36,
      paddingRight: 15,
      paddingVertical: 20,
   },
   head__one: {
      paddingVertical: 10,
   },
   subtitle1: {
      paddingLeft: 20,
      fontWeight: 'bold',
      color: colors.blackWashed,
   },
   subtitle2: {
      fontWeight: 'bold',
      color: colors.blackWashed
   },
   head__two: {
      flexDirection: 'row',
      paddingVertical: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   head__two_one: {
      flex: 1,
      marginLeft: 10
   },
   subtitle3: {
         color: colors.blackWashed,
         fontWeight: 'bold',
         fontSize: sizes.regilarTextSmall
   },
   subtitle4: {
      color: colors.blackWashed,
      fontWeight: 'bold',
      fontSize: sizes.regilarText
   },
   todoDetails__innerTodo: {
      flex: 1,
      paddingHorizontal:20,
   }, 
   todoDetails__description : {
      elevation: 1,
      padding: 15,
      marginBottom: 15
   },
   subtitle5: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      color: colors.blackWashed,
      marginBottom: 5
   },
   subtitle6: {
      color: colors.blackWashed,
      fontWeight: 'bold'
   },
   todoDetails__innerSection : {
      padding: 10,

   },
   subtitleHeader: {
      fontWeight: 'bold',
      color: colors.blackWashed,
      fontSize: sizes.regilarText
   },
   section__container: {
      paddingVertical: 10,
      marginBottom: 15,
   }
})