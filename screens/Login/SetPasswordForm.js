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
import { useDispatch, useSelector } from 'react-redux';
import { setSignupInputs } from '../../redux/slice/authuntication.slice';
import { signUp } from '../../redux/action/user.action';
// import authuntication from '../../redux/slice/authuntication.slice';

export default function SetPasswordForm({email, handleChangeLoginType}) {
   const [uiLoading, setUiLoading] = useState(true)
   const dispatch = useDispatch()
   const {loaders, signUpInputs} = useSelector(state => state.authuntication)
   
   const [inputError, setInputError] = useState({
      isError: false,
      message: '',
      inputName: ''
   })
   const [passwordInput, setpasswordInput] = useState({
      password: '',
      confirmPassword: ''
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
   }, [passwordInput])
   
   const handleOnChangeText =(value, name)=> {
      setpasswordInput({
         ...passwordInput,
         [name]: value
      })
   }
   useEffect(()=> {
      if(passwordInput.password === passwordInput.confirmPassword && validate(passwordInput)){
         dispatch(setSignupInputs({
            ...signUpInputs,
            password: passwordInput.password
         }))
      }
   }, [passwordInput])

   const handleRegister =()=> {
      dispatch(signUp(signUpInputs))
   }



  return (
   <View style={styles.loginForm__container}>
      {
         uiLoading ? <Loading /> :
         <View>
         <View style={styles.loginForm__innerOne}>
            <Center style={styles.wellcome__textContainer}>
               <Heading color={colors.blackPrimary} size="lg" mb={6} >{loginText.wellcome}</Heading>
               <Text style={styles.regularText}>
                  Entered Email adress-
               </Text>
               <Text style={styles.regularText}>
               {email}
               </Text>
               <Text style={styles.regularText}>
                  Please set your password
               </Text>
            </Center>
            <Input 
               name="password" 
               placeholder='Enter password' 
               sx={{marginBottom: 20}}
               onChangeText={handleOnChangeText}
               error={inputError}  
               value={passwordInput.password}
            />
            <Input 
               name="confirmPassword" 
               placeholder='Confirm password' 
               sx={{marginBottom: 20}}
               onChangeText={handleOnChangeText}
               error={inputError}  
               value={passwordInput.confirmPassword}
            />
         </View>
         <View style={styles.loginForm__innerTwo}>
            <LongButton 
               loading={loaders.signup}
               onPress={handleRegister} 
               title="register" 
               sx={{marginBottom: 25}} 
            />
            <LinkButton 
               onPress={() => handleChangeLoginType(LoginType.LOGIN)} 
               title="Back to Login" 
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
      justifyContent:'center',
      alignItems: 'center'
   },
   loginForm__innerOne : {
      marginBottom: 50,
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
      opacity: .6,
      lineHeight: 25,
   },
   loginForm__innerTwo: {
      justifyContent: 'center',
      alignItems: 'center'
   }
})