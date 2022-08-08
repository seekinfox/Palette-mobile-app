import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import { todoList } from '../../utils/defaultLists'
import TodoItem from '../../components/TodoItem'
import { Center } from 'native-base'
import Loading from '../../components/common/Loading'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../../redux/action/todo.action'
import { STORAGE_KEY } from '../../utils/defaultText'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getuser } from '../../utils/utils'

export default function AllTodos() {
   const dispatch = useDispatch()
   const {metaData} = useSelector(state => state.authuntication)

   const [accessToken, setAccessToken] = useState('')
   
   useEffect(()=>{ getuser(setAccessToken)}, [])

  console.log(accessToken, "$")

   const {allTodosDetails} = useSelector(state => state.todo)
   const [isScreenLoading, setIsScreenLoading] = useState(true)

  useEffect(()=> {
   if(accessToken){
      dispatch(getTodos(accessToken))
   }
   const resetScreenLoading = setTimeout(() => {
      setIsScreenLoading(false)
   }, 1000);
   return ()=>{
      clearTimeout(resetScreenLoading)
   }
  },[accessToken])

  return (
   isScreenLoading ? <Center flex={1}><Loading /></Center> :
    <View style={styles.allTodo__container}>
      <FlatList
         data={allTodosDetails}
         renderItem={({item}) => <TodoItem item={item} />}
         keyExtractor={item =>item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   allTodo__container :{
      flex: 1,
      backgroundColor:colors.primarywhite
   }
})