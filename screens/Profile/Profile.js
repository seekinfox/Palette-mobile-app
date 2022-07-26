import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileTopbar from '../../components/ProfileTopbar'
import { useNavigation } from '@react-navigation/native'
import ProfileInfo from '../../components/ProfileInfo'
import ProfileSection from '../../components/common/ProfileSection'
import { colors } from '../../utils/colors'
import { education, experience, interests, profileSections, social } from '../../utils/defaultLists'
import { Center, ScrollView } from 'native-base'
import Loading from '../../components/common/Loading'

export default function Profile() {
  const navigation = useNavigation()
  const [isScreenLoading, setIsScreenLoading] = useState(true)
  useEffect(()=> {
   const resetScreenLoading = setTimeout(() => {
      setIsScreenLoading(false)
   }, 1000);
   return ()=>{
      clearTimeout(resetScreenLoading)
   }
  },[])

   return (
    <View style={styles.profile__container}>
      <View>
         <ProfileTopbar navigation={navigation} />
         <View>
            <ProfileInfo />
         </View>
      </View>
      { 
         isScreenLoading ? <Center style={styles.loading}><Loading /></Center> :
         <ScrollView style={styles.profile__sections}>
         <ProfileSection 
            type={profileSections.education}
            data={education}
         />

         <ProfileSection 
            type={profileSections.workExperience}
            data={experience}
         />
         <ProfileSection
            itemHeight={75} 
            type={profileSections.interests}
            data={interests}
         />
         <ProfileSection
            itemHeight={75} 
            data={social}
         />
      </ScrollView>
   }
      {/* <View>icons buttons</View> */}

    </View>
  )
}

const styles = StyleSheet.create({
   profile__container: {
      flex: 1,
      backgroundColor: colors.primarywhite
   },
   profile__sections : {
      flex: 1,
   },
   loading: {
      flex: 1,
   }
})