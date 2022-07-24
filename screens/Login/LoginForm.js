import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/common/Input'
import LongButton from '../../components/common/LongButton'
import LinkButton from '../../components/common/LinkButton'
import { Center } from 'native-base'
import Loading from '../../components/common/Loading'
import { validate } from '../../utils/validations'
import { LoginType } from '../../utils/defaultText'
import { useDispatch } from 'react-redux'
//temp import 
import { setisLogin } from '../../redux/slice/authuntication.slice'

export default function LoginForm({handleChangeLoginType}) {
   const dispatch = useDispatch()
   const [uiLoading, setUiLoading] = useState(true)
   //input body
   const [loginInputBody, setLoginInputBody] = useState({
      email: '',
      password: ''
   })
   const [inputError, setInputError] = useState({
      isError: false,
      message: '',
      inputName: ''
   })

   useEffect(()=> {
      const resetUiLoading = setTimeout(() => {
         setUiLoading(false)
      }, 2000);
      setInputError({
         isError: false,
         message: '',
         inputName: ''
      })
      return () => {
         clearTimeout(resetUiLoading)
      }
   }, [])

   useEffect(() => {
      setInputError({
         isError: false,
         message: '',
         inputName: ''
      })
   }, [loginInputBody])
   

   const handleOnChangeText =(value, name)=> {
      setLoginInputBody({
         ...loginInputBody,
         [name]: value
      })
   }

   const handleLogin =()=> {
      let validation = validate(loginInputBody)
      if(validation.validate){
            dispatch(setisLogin(true))
         //something
      } else {
         setInputError({
            isError: true,
            message: validation.message,
            inputName: validation.input
         })
      }
   }



  return (
   <View style={styles.loginForm__container}>
      {
         uiLoading ? <Loading /> :
         <View>
         <View style={styles.loginForm__innerOne}>
            <Input 
               name='email' 
               onChangeText={handleOnChangeText} 
               placeholder='Enter email address' 
               sx={{marginBottom: 20}} 
               error={inputError}
               value={loginInputBody.email}
               />
            <Input 
               name='password' 
               placeholder='Enter password' 
               sx={{marginBottom: 20}} 
               onChangeText={handleOnChangeText} 
               secureTextEntry={true}
               error={inputError}
               value={loginInputBody.password}
            />
            <LinkButton 
               onPress={() => handleChangeLoginType(LoginType.FORGOT_PASSWORD)} 
               title="Forgot Password?" 
               sx={{alignSelf: 'flex-end'}} 
            />
         </View>
         <View>
            <LongButton 
               onPress={handleLogin}
               title="Log in" 
               sx={{marginBottom: 25}} />
            <LongButton onPress={() => handleChangeLoginType(LoginType.NEW_USER)} variant='outlined' title="New user" />
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