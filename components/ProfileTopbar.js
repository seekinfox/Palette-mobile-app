import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import IconButton from './common/IconButton'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/colors'
import { Heading } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { sizes } from '../utils/sizes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertBox from './common/AlertBox';
import { STORAGE_KEY } from '../utils/defaultText';
import { setisLogin } from '../redux/slice/authuntication.slice';
import { useDispatch } from 'react-redux';


export default function ProfileTopbar({logout, title,  navigation}) {
   const [isOpen, setIsOpen] = useState(false)
   const dispatch = useDispatch()

   const handleOnlogOut =()=>{
      setIsOpen(true)
   }
   const handlePressLogoutAlert =()=>{
         AsyncStorage.removeItem(STORAGE_KEY)
         dispatch(setisLogin(false))
   }

  return (
    <View style={styles.topbar__container}>
      <IconButton
         onPress={() => navigation.goBack()}
         sx={{elevation: 0, width: 50, height: 50}}
         renderIcon={() => <AntDesign name="left" size={sizes.mdIcon} color={colors.blackPrimary} />}
      />
      <Heading size='md' color={colors.blackPrimary}>{title}</Heading>
      { logout &&
         <IconButton 
            onPress={handleOnlogOut}
         sx={{elevation: 0, width: 50, height: 50}}
         renderIcon={()=> <Ionicons name="log-out" size={sizes.mdIcon} color={colors.primaryRed} />}
      />}
      <AlertBox isOpen={isOpen} setIsOpen={setIsOpen} onPress={handlePressLogoutAlert} />
    </View>
  )
}

const styles = StyleSheet.create({
   topbar__container: {
      paddingTop: 40,
      paddingBottom: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.primarywhite
   }
})