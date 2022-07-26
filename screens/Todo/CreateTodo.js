import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/colors'
import Input from '../../components/common/Input'
import TodoInput from '../../components/common/TodoInput'
import IconButton from '../../components/common/IconButton'
import { Ionicons } from '@expo/vector-icons';
import { sizes } from '../../utils/sizes'
import SelectInput from '../../components/common/Select'
import { todoType } from '../../utils/defaultLists'
import DateTimeInput from '../../components/common/DateTimeInput'
import AddFileButton from '../../components/common/AddFileButton'
import LongButton from '../../components/common/LongButton'
import ModalTodo from '../../components/ModalTodo'

export default function CreateTodo() {
   const [open, setOpen] = useState(false)

  return (
   <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.createTodo__conatainer}>
      <View style={styles.createTodo__one}>
         <TodoInput 
            style={{flex: 0.5, marginRight: 10,}}
            placeholder="Assignees"
            renderIcon={()=> {
               return (
               <IconButton
                  renderIcon={()=> <Ionicons name="md-person-add-outline" size={sizes.smallIocon} color={colors.blackPrimary} />}
               />)
            }}
            editable={false} 
         />

         <SelectInput label='Todo type' data={todoType} />
      </View>

      <View style={styles.createTodo__two}>
         <TodoInput placeholder='Enter action text...' />
      </View>

      <View style={styles.createTodo__three}>
            <DateTimeInput />
            <DateTimeInput isTime={true} />
      </View>
      <View style={styles.createTodo__four}>
         <TodoInput 
            style={{width:'100%', marginBottom: 15}}
            multiline={true} 
            placeholder='Enter Description...' />

         <AddFileButton
            onPress={()=> setOpen(true)} 
            style={{marginBottom: 15}} />
         
         <LongButton 
         title='Create'
         sx={{
            backgroundColor: colors.primaryRed,
            borderColor:colors.primaryRed
         }}
         sxInner={{
            backgroundColor: colors.primaryRed,
         }}
         onPress={() => console.log('create')} />
      </View>
      <ModalTodo 
         open={open} 
         setOpen={setOpen}
         title='Select resource type'
      />
    </View>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
   createTodo__conatainer: {
      flex: 1,
      backgroundColor: colors.primarywhite,
      padding: 30,
   },
   createTodo__one: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
   },
   createTodo__two: {
      marginBottom: 15,
   }, 
   createTodo__three: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 20,
   },
   createTodo__four: {
      justifyContent:'center',
      alignItems: 'center'
   }
})