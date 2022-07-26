import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'native-base'
import { sizes } from '../utils/sizes'
import { colors } from '../utils/colors'
import ModalItemButton from './common/ModalItemButton'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import LongButton from './common/LongButton'
import LinksTodoModel from './LinksTodoModel'

export default function ModalTodo({open, setOpen, title}) {
   const [fileInput, setFileInput] = useState([])
   const [isAddlinkOpen, setIsAddlinkOpen] = useState(false)

   const handlePickFiles = async ()=>{
      try {
         let data = await DocumentPicker.getDocumentAsync({})
         setFileInput(data)
         setOpen(false)
      } catch (error) {
         console.log(error)
      }
   }
   

  return (
   <Modal isOpen={open} onClose={() => setOpen(false)}>
      <Modal.Content minW={'100%'} style={{
         marginBottom: 0,
         marginTop:'auto',
         justifyContent:'center',
         alignItems:'center'
      }} >
            <Modal.CloseButton />
            <Modal.Header>
               <Text style={styles.header}>{title}</Text>
            </Modal.Header>
            <Modal.Body style={{
               width: 450,
            }}>
               <ModalItemButton
                  onPress={handlePickFiles}
                  icon={
                  <Ionicons name="document-outline" size={sizes.smallIocon} color={colors.blackPrimary} />}
                  title='File'
               />
               <ModalItemButton
                  onPress={()=> setIsAddlinkOpen(true)}
                  icon={
                  <Feather name="link" size={sizes.smallIocon} color={colors.blackPrimary} />}
                  title='Links'
               />
            </Modal.Body>
            {/* <Modal.Footer>
               
            </Modal.Footer> */}
      </Modal.Content>


      {/* links get popover ----------------------------------- */}
      <LinksTodoModel 
         isAddlinkOpen={isAddlinkOpen} 
         setIsAddlinkOpen={setIsAddlinkOpen} 
      />
   </Modal>
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
      borderWidth: 1,
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