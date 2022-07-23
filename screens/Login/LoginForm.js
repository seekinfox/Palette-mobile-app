import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/common/Input'
import LongButton from '../../components/common/LongButton'
import LinkButton from '../../components/common/LinkButton'
import { Center } from 'native-base'
import Loading from '../../components/common/Loading'

export default function LoginForm({handleChangeLoginType}) {
   const [uiLoading, setUiLoading] = useState(true)
   useEffect(()=> {
      const resetUiLoading = setTimeout(() => {
         setUiLoading(false)
      }, 2000);
      return () => {
         clearTimeout(resetUiLoading)
      }
   }, [])

  return (
   <View style={styles.loginForm__container}>
      {
         uiLoading ? <Loading /> :
         <View>
         <View style={styles.loginForm__innerOne}>
            <Input placeholder='Enter email address' sx={{marginBottom: 20}} />
            <Input placeholder='Enter password' sx={{marginBottom: 20}} />
            <LinkButton title="Forgot Password?" sx={{alignSelf: 'flex-end'}} />
         </View>
         <View>
            <LongButton title="Log in" sx={{marginBottom: 25}} />
            <LongButton onPress={() => handleChangeLoginType('new')} variant='outlined' title="New user" />
         </View>
         </View>
      }
   </View>
  )
}
const styles = StyleSheet.create({
   loginForm__container: {
      marginTop: 156,
      minHeight: 400,
      minWidth: 330,
      justifyContent:'center',
      alignItems: 'center'
   },
   loginForm__innerOne : {
      marginBottom: 40
   }
})