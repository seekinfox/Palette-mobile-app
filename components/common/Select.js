import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckIcon, Select } from 'native-base'
import { colors } from '../../utils/colors'

export default function SelectInput({name, handlesetInput, style, label, data}) {
  const [ service ,setService] = useState('')
   
  useEffect(()=> {
    if(service){
      handlesetInput(name, service)
    }
  }, [service])

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      // elevation: 1,
      borderWidth: 1,
      borderColor: colors.blackOff,
      ...style
    }}>
     <Select 
      selectedValue={service} 
      minWidth="100%" 
      accessibilityLabel={label} 
      placeholder={label} 
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }}  
      onValueChange={itemValue => setService(itemValue)}
      >
         { 
            data?.map(item => <Select.Item key={item.key} label={item.label} value={item.value} />)
         } 
      </Select>
    </View>
  )
}