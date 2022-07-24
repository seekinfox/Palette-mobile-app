import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Header from '../components/Header';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import Todo from '../screens/Todo/Todo';


const MainStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

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
      <NavigationContainer>
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
         </MainStack.Navigator>
      </NavigationContainer>
   )
}