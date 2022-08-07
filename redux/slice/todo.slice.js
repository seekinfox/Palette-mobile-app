import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "../../utils/defaultLists";

const initialState = {
   loaders: {

   },
   allTodosDetails: todoList,
   singleTodoDetails: undefined,
   createTodo: {}
}
const todo = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      createTodoInputs:(state, action)=> {
         state.createTodo = {
            ...state.createTodo,
            [action.payload.name]: action.payload.value
         }
      },
      resetCreateTodo:(state, action) => {
         state.createTodo= {}
      }
   },
   extraReducers: (builder) => {

   }
})

export const {
   createTodoInputs,
   resetCreateTodo
} = todo.actions
export default todo