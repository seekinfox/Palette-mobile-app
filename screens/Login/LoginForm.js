import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../../components/common/Input'
import LongButton from '../../components/common/LongButton'
import LinkButton from '../../components/common/LinkButton'

export default function LoginForm() {
  return (
   <View style={styles.loginForm__container}>
      <View style={styles.loginForm__innerOne}>
         <Input placeholder='Enter email address' sx={{marginBottom: 20}} />
         <Input placeholder='Enter password' sx={{marginBottom: 20}} />
         <LinkButton title="Forgot Password?" sx={{alignItems: 'flex-end'}} />
      </View>
      <View>
         <LongButton title="Log in" sx={{marginBottom: 25}} />
         <LongButton variant='outlined' title="New user" />
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
   loginForm__container: {
      marginTop: 156,
   },
   loginForm__innerOne : {
      marginBottom: 40
   }
})