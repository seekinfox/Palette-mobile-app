import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Center, Image } from 'native-base'
import LongButton from '../../components/common/LongButton'
import { commonImages, logo } from '../../utils/images'
import Input from '../../components/common/Input'
import LoginForm from './LoginForm'
import EmailForm from './EmailForm'
export default function Login() {
const [isLoginType, setIsLoginType] = useState('login')
const handleChangeLoginType = (type) => {
   setIsLoginType(type)
}

  return (
   <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <Center flex={1}>
         <View>
            <Image source={logo} alt="palette logo" />
         </View>
         {
            (isLoginType === "login") ? 
               <LoginForm 
                  handleChangeLoginType={handleChangeLoginType} 
               /> :
            (isLoginType === 'new') ? 
               <EmailForm 
                  handleChangeLoginType={handleChangeLoginType} /> :
            (isLoginType === 'set password') ? 
               <></> :
            <></>
         }
    </Center>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

})