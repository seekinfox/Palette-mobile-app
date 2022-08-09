import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Modal } from 'native-base'
import LongButton from './common/LongButton'
import { Feather } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';
import Input from './common/Input';
import {useDispatch} from "react-redux"
import { createTodoInputs } from '../redux/slice/todo.slice'

export default function LinksTodoModel({isAddlinkOpen, setIsAddlinkOpen}) {
   const dispatch = useDispatch()
   const [input, setInput]= useState('')
   const [title, setTitle] = useState('')
   // const [url, setUrl] = useState({})
   const [url, setUrl] = useState('')
   


   const handleCloseModel =()=>{
      setIsAddlinkOpen(false)
   }
   const handleChangeTitle =(value, name)=> {
      setTitle({
         [name]: value
      })
   }
   const handleChangeUrl =(value, name)=> {
      setUrl(value)
   }
   const handleOnDone =()=>{
      setInput(url)
      // setInput([
      //    ...input,
      //    {
      //       ...title,
      //       ...url
      //    }])
      setIsAddlinkOpen(false) 
   }
   useEffect(() => {
      dispatch(createTodoInputs({name: 'resource', value: input}))
   }, [input])
   
  return (
   <View>
      <Modal isOpen={isAddlinkOpen} onClose={() => setIsAddlinkOpen(false)}>
         <Modal.Content minW={'100%'} style={{
            marginBottom: 0,
            marginTop:'auto',
            justifyContent:'center',
            alignItems:'center',
         }} >
            <Modal.CloseButton />
            <Modal.Header style={styles.links__header}>
                  <Feather style={{marginRight: 10}} name="link" size={sizes.smallIocon} color={colors.blackPrimary} />
                  <Text style={styles.header}>Upload Link</Text>
            </Modal.Header>
            <Modal.Body style={{
               width: 450,
            }}>
               <Input
                  editable={false} //api structure is different title is disabled for that reason
                  name='linkTitle'
                  onChangeText={handleChangeTitle} 
                  placeholder='Enter title' 
                  sx={{width: '90%'}}  
               />
               <Input
                  name='linkUrl'
                  onChangeText={handleChangeUrl}   
                  placeholder='Enter or Paste URL' 
                  sx={{width: '90%'}}
               />
               
            </Modal.Body>
            <Modal.Footer style={styles.buttons}>
                  <LongButton
                     onPress={handleCloseModel}
                     variant='outlined' 
                     sx={{
                        backgroundColor: colors.primaryRed,
                        width: 'auto',
                        flex: 1,
                        borderColor: colors.primaryRed,
                     }}
                     textStyle={{color: colors.primaryRed}}
                     title={'Cancel'} />
                  <LongButton
                     onPress={handleOnDone}
                     sx={{
                        backgroundColor: colors.primaryRed,
                        borderColor: colors.primaryRed,
                        width: 'auto',
                        flex: 1,
                     }}
                     sxInner={{backgroundColor: colors.primaryRed,}}
                     title='Done' />
            </Modal.Footer>
         </Modal.Content>
      </Modal>
   </View>
  )
}

const styles = StyleSheet.create({
   header: {
      fontSize: sizes.regilarText,
      color: colors.blackPrimary,
      fontWeight: 'bold'
   },
   content: {
      width: '100%',
      height: '100%',
   },

   links__header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   buttons: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   }
})