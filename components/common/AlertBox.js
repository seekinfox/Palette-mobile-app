import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { AlertDialog, Button } from 'native-base'
import { Alerts } from '../../utils/defaultText';

export default function AlertBox({isOpen, setIsOpen, onPress}) {
   const onClose = () => setIsOpen(false);
   const cancelRef = React.useRef(null);

  return (
   <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
      <AlertDialog.CloseButton />
      <AlertDialog.Body>
         {Alerts.logOut}
      </AlertDialog.Body>
      <AlertDialog.Footer>
         <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
            Cancel
            </Button>
            <Button colorScheme="danger" onPress={() => {onClose(); onPress()}}>
            Logout
            </Button>
         </Button.Group>
      </AlertDialog.Footer>
      </AlertDialog.Content>
   </AlertDialog>
  )
}