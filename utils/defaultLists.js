import { Ionicons } from '@expo/vector-icons';

export const todoList =[
   {
      id: 1,
      title: 'lorem ipsum sit amet',
      date: '21/07/2022',
      status: 'overdue',
      type: 'college application',
      location: ''
   },
   {
      id: 2,
      title: 'lorem ipsum sit amet',
      date: '21/07/2022',
      status: '',
      type: 'college application',
      location: ''
   },
   {
      id: 3,
      title: 'lorem ipsum sit amet',
      date: '21/07/2022',
      status: '',
      type: '',
      location: ''
   },

]

export const TodoNavigation= [
   {
      key: 1,
      icon: <Ionicons name="add-circle-outline" size={24} color="black" />,
      screen: 'CreateTodo'
   },
   {
      key: 2,
      title: 'All',
      screen: 'AllTodos'
   },
   {
      key: 3, 
      title: 'Open',
      screen: 'AllTodo'
   },
   {
      key: 4, 
      title: 'Completed',
      screen: 'AllTodo'
   },
   {
      key: 5,
      title: 'closed',
      screen: 'AllTodo'
   }
]