import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Center, Image } from 'native-base'
import LongButton from '../../components/common/LongButton'
import { commonImages, logo } from '../../utils/images'
import Input from '../../components/common/Input'
import LoginForm from './LoginForm'
import EmailForm from './EmailForm'
import ForgotPassword from './ForgotPassword'
import { LoginType } from '../../utils/defaultText'
import { colors } from '../../utils/colors'
export default function Login() {
const [isLoginType, setIsLoginType] = useState('login')
const handleChangeLoginType = (type) => {
   setIsLoginType(type)
}

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
    </Center>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

})