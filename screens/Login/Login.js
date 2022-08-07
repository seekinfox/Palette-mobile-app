import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState,  useEffect} from 'react'
import { StyleSheet } from 'react-native'
import { Center, Image } from 'native-base'
import LongButton from '../../components/common/LongButton'
import { commonImages, logo } from '../../utils/images'
import Input from '../../components/common/Input'
import LoginForm from './LoginForm'
import EmailForm from './EmailForm'
import ForgotPassword from './ForgotPassword'
import { Alerts, LoginType } from '../../utils/defaultText'
import { colors } from '../../utils/colors'
import Alert from '../../components/common/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetLogin, resetSignup } from '../../redux/slice/authuntication.slice'
export default function Login() {
   const [isLoginType, setIsLoginType] = useState('login')
   const authuntication = useSelector(state => state.authuntication)
   const dispatch = useDispatch()
   const handleChangeLoginType = (type) => {
      setIsLoginType(type)
   }
   const [alert, setAlert] = useState({
      status: '',
      message: '',
      visible: false,
   })

   useEffect(() => {
      let reset= setTimeout(() => {
         setAlert({
            status: '',
            message: '',
            visible: false,
         })
      }, 10000);
     return () => {
       clearTimeout(reset)
     }
   }, [alert])
   
   useEffect(() => {
     if(authuntication.loaders.loginFailure){
         setAlert({
            status: 'error',
            message: Alerts.loginFailure,
            visible: true
         })
         dispatch(resetLogin())
     }
     if(authuntication.loaders.signUpFailure){
      setAlert({
         status: 'error',
         message: Alerts.signupFailure,
         visible: true
      })
      dispatch(resetSignup())
     }
     if(authuntication.loaders.signUpSuccess){
      setAlert({
         status: 'success',
         message: Alerts.signUpSuccess,
         visible: true
      })
      dispatch(resetSignup())
     }
   }, [
      authuntication.loaders.loginFailure,
      authuntication.loaders.signUpFailure,
      authuntication.loaders.signUpSuccess
   ])
   

  return (
   <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <Center flex={1} style={{backgroundColor: colors.primarywhite}}>
         <View>
            <Image source={logo} alt="palette logo" />
         </View>
         {
            (isLoginType === LoginType.LOGIN) ? 
               <LoginForm 
                  handleChangeLoginType={handleChangeLoginType} 
               /> :
            (isLoginType === LoginType.NEW_USER) ? 
               <EmailForm 
                  handleChangeLoginType={handleChangeLoginType} 
               /> :  
            (isLoginType === LoginType.FORGOT_PASSWORD) ?
               <ForgotPassword 
                  handleChangeLoginType={handleChangeLoginType} 
               />
                  :
               <Center>Error finding the screen</Center>
         }
         <Alert alert={alert} />
    </Center>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

})