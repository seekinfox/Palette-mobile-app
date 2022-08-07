import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Loading from '../../components/common/Loading';
import Input from '../../components/common/Input';
import LinkButton from '../../components/common/LinkButton';
import LongButton from '../../components/common/LongButton';
import { StyleSheet } from 'react-native';
import { Center, Heading } from 'native-base';
import { loginText, LoginType } from '../../utils/defaultText';
import { sizes } from '../../utils/sizes';
import {colors} from '../../utils/colors';
import { validate } from '../../utils/validations';
import SetPasswordForm from './SetPasswordForm';
import { useDispatch } from 'react-redux';
import { setSignupInputs } from '../../redux/slice/authuntication.slice';

export default function EmailForm({handleChangeLoginType}) {
   const [loginType, setLoginType] = useState('')
   const [uiLoading, setUiLoading] = useState(true)
   const dispatch = useDispatch()
   const [inputError, setInputError] = useState({
      isError: false,
      message: '',
      inputName: ''
   })
   const [emailFormInput, setEmailFormInput] = useState({
      email: ''
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
   }, [emailFormInput])
   
   const handleOnChangeText =(value, name)=> {
      setEmailFormInput({
         email: value
      })
   }

   const handleOnEmailContinue =()=> {
      const validation = validate(emailFormInput)
      if(validation.validate){
         dispatch(setSignupInputs({email: emailFormInput.email}))
         setLoginType(LoginType.SET_PASSWORD)
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
         loginType === 'set password' ?
         <SetPasswordForm 
            email={emailFormInput.email} 
            handleChangeLoginType={handleChangeLoginType}  
         />
         :
         <View>
         <View style={styles.loginForm__innerOne}>
            <Center style={styles.wellcome__textContainer}>
               <Heading color={colors.blackPrimary} size="lg" mb={6} >{loginText.wellcome}</Heading>
               <Text style={styles.regularText}>
                  {loginText.wellcomeEmail}
               </Text>
            </Center>
            <Input 
               name="email" 
               placeholder='Enter email address' 
               sx={{marginBottom: 20}}
               onChangeText={handleOnChangeText}
               error={inputError}  
               value={emailFormInput.email}
            />
         </View>
         <View style={styles.loginForm__innerTwo}>
            <LongButton 
               onPress={handleOnEmailContinue} 
               title="continue" 
               sx={{marginBottom: 25}} 
            />
            <LinkButton 
               onPress={() => handleChangeLoginType('login')} 
               title="Already have an account?" 
               sx={{alignItems: 'center'}} 
            />
         </View>
         </View>
      }
   </View>
  )
}
const styles = StyleSheet.create({
   loginForm__container: {
      marginTop: 130,
      minHeight: 400,
      minWidth: 330,
      justifyContent:'center',
      alignItems: 'center'
   },
   loginForm__innerOne : {
      marginBottom: 40,
      justifyContent:'center',
      alignItems: 'center'
   },
   wellcome__textContainer : {
      paddingHorizontal: 30,
      marginBottom: 50,
   },
   regularText: {
      fontSize: sizes.regilarText,
      color: colors.blackPrimary,
      fontWeight: 'bold',
      opacity: .6
   },
   loginForm__innerTwo : {
      justifyContent: 'center',
      alignItems: 'center'
   }
})