import { View, Text, Touchable, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import HorizontalNav from '../../components/HorizontalNav'
import { TodoStack } from '../../routes/NestedStacks'

export default function Todo() {
  return (
    <TouchableWithoutFeedback style={styles.todo__container}>
      <View style={styles.todo__containerOne}>
        <Header title='Todo' />
        <View>
          <HorizontalNav />
        </View>
        <View style={styles.todo__stackContainer}>
          <TodoStack />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  todo__container: {
    flex: 1
  },
  todo__containerOne: {
    borderWidth: 1,
    flex: 1
  },
  todo__stackContainer : {
    flex: 1,
  }
})