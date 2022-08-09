import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { createTodoInputs, resetCreateTodo, resetCreateTodoLoaders } from '../../redux/slice/todo.slice'
import {useSelector } from "react-redux";
import { getuser } from '../../utils/utils'
import { _createTodo } from '../../redux/action/todo.action'
import AssigneesSheet from '../../components/AssigneesSheet'
import Alert from '../../components/common/Alert'
import { Alerts } from '../../utils/defaultText'

export default function CreateTodo() {
   const dispatch = useDispatch()
   const {createTodo, loaders} = useSelector(state => state.todo)
   const [open, setOpen] = useState(false)
   const [accessToken, setAccessToken] = useState('')
   const [isOpen, setIsOpen] = useState(false)
   const [alert, setAlert] = useState({
      status: '',
      message: '',
      visible: false,
   })

   useEffect(() => {
      let reset= setTimeout(() => {
         setAlert({
            status: '',
            message: '',
            visible: false,
         })
      }, 10000);
     return () => {
       clearTimeout(reset)
     }
   }, [alert])


   useEffect(() => getuser(setAccessToken), [])
   
   const handleCreateTodo =()=>{
      dispatch(_createTodo({data: createTodo, accesskey:accessToken}))
   }

   const handlesetInput =(name, value)=> {   
      dispatch(createTodoInputs({name: name, value: value}))
   }
   useEffect(()=> {
      dispatch(resetCreateTodo())
   }, [])

   useEffect(()=>{
      if(loaders.createTodoSuccess){
         setAlert({
            status: 'success',
            message: Alerts.TodoCreateSuccess,
            visible: true
         })
         dispatch(resetCreateTodoLoaders())
      }
   },[loaders.createTodo])

   const handleAssigneeButton =()=>{
      setIsOpen(true)
   }

  return (
   <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.createTodo__conatainer}>
      <View style={styles.createTodo__one}>
         {/* get assignee  */}

         <TodoInput 
            style={{flex: 0.5, marginRight: 10,}}
            placeholder="Assignees"
            renderIcon={()=> {
               return (
               <IconButton
                  onPress={handleAssigneeButton}
                  renderIcon={()=> <Ionicons name="md-person-add-outline" size={sizes.smallIocon} color={colors.blackPrimary} />}
               />)
            }}
            editable={false} 
         />
         
         <SelectInput 
            name='type'
            handlesetInput={handlesetInput} 
            label='Todo type' 
            data={todoType} />
      </View>

      <View style={styles.createTodo__two}>
         <TodoInput 
            name="title" 
            placeholder='Enter title' 
            onChangeText={(value)=> handlesetInput('title',value)}   
         />
      </View>

      <View style={styles.createTodo__three}>
            <DateTimeInput
               name="date"
               handlesetInput={handlesetInput}
            />
            <DateTimeInput
               name='time' 
               handlesetInput={handlesetInput}
               isTime={true} />
      </View>
      <View style={styles.createTodo__four}>
         <TodoInput 
            onChangeText={(value) => handlesetInput('description', value)}
            style={{width:'100%', marginBottom: 15}}
            multiline={true} 
            placeholder='Enter description...' />

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
         onPress={handleCreateTodo} />
      </View>
      <ModalTodo 
         open={open} 
         setOpen={setOpen}
         title='Select resource type'
      />
      <AssigneesSheet isOpen={isOpen} setIsOpen={setIsOpen} />
      <Alert 
         style={{
            top: '100%', 
            bottom:30
         }}
         alert={alert} />
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