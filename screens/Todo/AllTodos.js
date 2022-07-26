import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import { todoList } from '../../utils/defaultLists'
import TodoItem from '../../components/TodoItem'
import { Center } from 'native-base'
import Loading from '../../components/common/Loading'

export default function AllTodos() {
   const [isScreenLoading, setIsScreenLoading] = useState(true)
  useEffect(()=> {
   const resetScreenLoading = setTimeout(() => {
      setIsScreenLoading(false)
   }, 1000);
   return ()=>{
      clearTimeout(resetScreenLoading)
   }
  },[])

  return (
   isScreenLoading ? <Center flex={1}><Loading /></Center> :
    <View style={styles.allTodo__container}>
      <FlatList
         data={todoList}
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