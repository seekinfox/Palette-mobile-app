import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface, todoList } from "../../utils/defaultLists";
import { getTodos, _createTodo } from "../action/todo.action";

const initialState = {
   loaders: {
      getTodos: false,
      getTodosSuccess: false,
      getTodosFailure: false,

      createTodo: false,
      createTodoSuccess: false,
      createTodoFailure: false,

   },
   allTodosDetails: {},
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
      },
      resetCreateTodoLoaders:(state) =>{
         state.loaders.createTodo = false;
         state.loaders.createTodoFailure = state.loaders.createTodoSuccess = false;
      }
   },
   extraReducers: (builder) => {
      builder.addCase(getTodos.pending, (state)=> {
         state.loaders.getTodos = true;
         state.loaders.getTodosSuccess = state.loaders.getTodosFailure = false 
      })
      builder.addCase(getTodos.fulfilled, (state, {payload})=>{
         state.loaders.getTodosSuccess = true;

         state.allTodosDetails = payload.data.allToDos.map(item => {
            return {
               id: item._id,
               title: item.title,
               date: 'Jun 20 2021',
               status: 'live',
               type: item.type,
               location: 'location xyz',
               link: item.resource,
               document: 'das',
            }
         })
      })
      builder.addCase(getTodos.rejected, (action)=>{
         console.log(action)
      })

      builder
      .addCase(_createTodo.pending, (state)=>{
         state.loaders.createTodo = true;
         state.loaders.createTodoSuccess = state.loaders.createTodoFailure = false
      })
      .addCase(_createTodo.fulfilled, (state)=>{
         state.loaders.createTodoSuccess = true;
         state.loaders.createTodo = state.loaders.createTodoFailure = false
      })
      .addCase(_createTodo.rejected, (state)=>{
         state.loaders.createTodoFailure = true;
         state.loaders.createTodoSuccess = state.loaders.createTodo= false
      })
   }
})

export const {
   createTodoInputs,
   resetCreateTodo,
   resetCreateTodoLoaders
} = todo.actions


export default todo