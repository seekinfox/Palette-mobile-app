import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Feather } from '@expo/vector-icons';

export default function DateTimeInput({name, handlesetInput, isTime, style}) {
const [date ,setDate] = useState(new Date())
const [time, setTime] = useState(new Date())

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate;
  setDate(currentDate);
  setTime(currentDate);
};

useEffect(()=> {
  if(name === 'date'){
    handlesetInput(name, date)
  } else {
    handlesetInput(name, date)
  }
}, [date, time])


const showMode = (currentMode) => {
  DateTimePickerAndroid.open({
    value: currentMode === 'date' ? date: time,
    onChange,
    mode: currentMode,
    is24Hour: true
  })
};
  const handleOpenDate =()=>{
    showMode('date');
  }
  const handleOpenTime =()=>{
    showMode('time');
  }
  return (
   isTime ?
   <TouchableOpacity style={{...styles.dateInput__container, ...style}} onPress={handleOpenTime}>
      <Feather style={styles.icon} name="clock" size={sizes.smallIocon} color={colors.blackPrimary} />
      <Text style={styles.text}>Due Time</Text>
    </TouchableOpacity>
   :
    <TouchableOpacity style={{...styles.dateInput__container, ...style}} onPress={handleOpenDate}>
      <Feather style={styles.icon} name="calendar" size={sizes.smallIocon} color={colors.blackPrimary} />
      <Text style={styles.text}>Due Date</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   dateInput__container: {
      borderWidth: 1,
      flexDirection: 'row',
      padding: 10,
      elevation: 1,
      borderColor: colors.blackOff,
      borderRadius: 10,
   },
   icon: {
    marginRight: 5
   },
   text: {
    fontWeight: 'bold',
    color: colors.blackPrimary
   }
})