import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Loading from '../../components/common/Loading';
import Input from '../../components/common/Input';
import LinkButton from '../../components/common/LinkButton';
import LongButton from '../../components/common/LongButton';
import { StyleSheet } from 'react-native';
import { Center, Heading } from 'native-base';
import { loginText } from './defaultText';
import { sizes } from '../../utils/sizes';
import {colors} from '../../utils/colors';

export default function EmailForm({handleChangeLoginType}) {
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
            <Center style={styles.wellcome__textContainer}>
               <Heading color={colors.blackPrimary} size="lg" mb={6} >{loginText.wellcome}</Heading>
               <Text style={styles.regularText}>
                  {loginText.wellcomeEmail}
               </Text>
            </Center>
            <Input placeholder='Enter email address' sx={{marginBottom: 20}} />
         </View>
         <View>
            <LongButton title="continue" sx={{marginBottom: 25}} />
            <LinkButton onPress={() => handleChangeLoginType('login')} title="Already have an account?" sx={{alignItems: 'center'}} />
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
   }
})