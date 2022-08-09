import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Box , Alert as AB, HStack} from 'native-base'

export default function Alert({alert, style}) {
   
  return (
   alert.visible ?
      <Box  style={{
         position: 'absolute',
         left: 10,
         top: 40,
         ...style
      }}>
         <AB w="100%" variant={'subtle'} colorScheme="success" status={alert.status}>
            <HStack>
               <AB.Icon mr={3}/>
               <Text>{alert.message}</Text>
            </HStack>
         </AB>
      </Box> : null
  )
}