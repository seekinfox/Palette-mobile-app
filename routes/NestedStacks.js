import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import AllTodos from '../screens/Todo/AllTodos';
import CreateTodo from '../screens/Todo/CreateTodo';
import EditProfile from '../screens/Profile/EditProfile';

const todoStackRef = createRef()
export const navigateTodo =(name, params)=> {
   todoStackRef?.current?.navigate(name, params)
}

const Stack = createNativeStackNavigator()
export const TodoStack =() => {
   return (
      <NavigationContainer independent={true} ref={todoStackRef}>
         <Stack.Navigator screenOptions={{
               headerShown: false
         }}>
            <Stack.Screen
               name='AllTodos'
               component={AllTodos}
            />

            <Stack.Screen
               name='CreateTodo'
               component={CreateTodo}
            />

            <Stack.Screen 
               name='EditProfile'
               component={EditProfile}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}