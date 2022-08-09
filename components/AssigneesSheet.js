import { View, Text } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Actionsheet, Avatar, Center, FlatList } from 'native-base'
import { StyleSheet } from 'react-native'
import { sizes } from '../utils/sizes'
import { colors } from '../utils/colors'
import AssigneeItem from './common/AssigneeItem'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../utils/utils'
import { _getUsers } from '../redux/action/user.action'
import Loading from './common/Loading'
import IconButton from './common/IconButton'
import { FontAwesome } from '@expo/vector-icons';
import { createTodoInputs } from '../redux/slice/todo.slice'


export default function AssigneesSheet({isOpen, setIsOpen}) {
   const dispatch = useDispatch()
   const { Assignees } = useSelector(state => state.authuntication)
   const [accessToken, setAccessToken] = useState('')
   const [user, setUser] = useState({})
   const [loading, setLoading] = useState(true)
   const [AssigeeInput, setAssigneInput] = useState([])

   useEffect(()=>{ 
      getuser(setAccessToken, setUser)
      if(accessToken){
         dispatch(_getUsers(accessToken))
      }
   }, [accessToken])

   const AssigneeList = useMemo(() => {
      return Assignees?.filter(i => i._id !== user._id)
   }, [Assignees])

   useEffect(() => {
   const reset = setTimeout(() => {
      setLoading(false)
   }, 1500)

   return () => {
      clearTimeout(reset)
   }
   }, [])

   const handleOnPressAssignee =(id)=> {
      setAssigneInput([
         ...AssigeeInput,
         id
      ])
   }

   const handleSend = () => {
      dispatch(createTodoInputs({
        name: 'assignees',
        value: AssigeeInput
      }))
      setIsOpen(false)
   }
  
  return (
   <Actionsheet isOpen={isOpen} onClose={()=> setIsOpen(false)}>
      <Actionsheet.Content style={{paddingBottom: 15}}>
         <AssigneeItem selected={AssigeeInput} onPress={handleOnPressAssignee} item={{...user, role: 'You'}} />
      </Actionsheet.Content>

      <Actionsheet.Item style={styles.assignee__container}>
         {
            loading ? <Center p={10}><Loading /></Center> :
            Assignees && 
            <View>
               <FlatList
               data={AssigneeList}
               renderItem={({item}) => <AssigneeItem selected={AssigeeInput} onPress={handleOnPressAssignee} style={{marginBottom: 10}} item={item} />}
               keyExtractor={item =>item._id}
                />
            </View>
         }
      </Actionsheet.Item>
         <IconButton
               onPress={handleSend}
               sxContainer={{
                  width: 60,
                  height: 60,
                  position: 'absolute',
                  right: 20,
                  bottom: 20,
               }} 
               sx={{
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: colors.primaryPurpleDark,
               }}
               renderIcon={()=> <FontAwesome name="send" size={sizes.mdIcon} color={colors.primarywhite} />} 

               />
      </Actionsheet>
  )
}

const styles = StyleSheet.create({
   title: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      color: colors.blackPrimary,
      padding:10,
   },
   item: {
      flexDirection: 'row',
      width: 420,
      padding: 10,
      justifyContent: 'flex-start',
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: colors.whiteWashed
   },
   text: {
      fontWeight: 'bold',
      fontSize: sizes.regilarText,
      marginLeft: 20
   },

   text1: {
      fontWeight: 'bold',
      fontSize: sizes.regilarTextSmall,
      marginLeft: 20,
      opacity: .5
   },
   item__innerone: {
      flex: 1
   },
   assignee__container: {
      width: '100%',
      height: 500,
      borderTopWidth: 2,
      borderColor: 'rgba(0,0,0,.1)',
      justifyContent: 'center',
      alignItems: 'center'
   },
   send: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      borderWidth: 1,
      width: 60,
      height: 60,
   }
})