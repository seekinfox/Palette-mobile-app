import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { todoList } from '../../utils/defaultLists'
import TodoItem from '../../components/TodoItem'

export default function AllTodos() {
  return (
    <View style={styles.allTodo__container}>
      <FlatList
         data={todoList}
         renderItem={({item}) => <TodoItem item={item} />}
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