import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef, useState } from 'react';
import Header from '../components/Header';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import Todo from '../screens/Todo/Todo';
import TodoDetails from '../screens/Todo/TodoDetails';

const MainStack = createNativeStackNavigator()
// const HomeStack = createNativeStackNavigator()
const mainStackRef = createRef()
export const navigationRef =(name, params) => {
   mainStackRef.current.navigate(name, params)
}
export const LoginStack =()=> {

   return (
      <NavigationContainer>
         <MainStack.Navigator  screenOptions={{
               headerShown: false
            }}>
            <MainStack.Screen 
               name='Login' 
               component={Login}   
            />
         </MainStack.Navigator>
      </NavigationContainer>
   )
}

export const Home = () => {
   return (
      <NavigationContainer ref={mainStackRef}>
         <MainStack.Navigator
            screenOptions={{
               headerShown: false
            }}
         >
            <MainStack.Screen 
               name='Todo' 
               component={Todo} 
            />
            <MainStack.Screen
               name='Profile'
               component={Profile}
            />
            <MainStack.Screen
               name='TodoDetails'
               component={TodoDetails}
            />
         </MainStack.Navigator>
      </NavigationContainer>
   )
}