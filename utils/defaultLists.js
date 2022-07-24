import { Ionicons } from '@expo/vector-icons';

export const todoList =[
   {
      id: 1,
      title: 'lorem ipsum sit amet',
      date: 'Jun 20 2021',
      status: 'overdue',
      type: 'college application',
      location: '',
      link: 'dd',
      document: 'das',
   },
   {
      id: 2,
      title: 'lorem ipsum sit amet',
      date: 'Jun 20 2021',
      status: '',
      type: 'college application',
      location: '',
      link: '',
      document: '',
   },
   {
      id: 3,
      title: 'lorem ipsum sit amet',
      date: 'May 20 2021',
      status: '',
      type: '',
      location: '',
      link: '',
      document: '',
   },
   {
      id: 4,
      title: 'lorem ipsum sit amet',
      date: 'Apr 20 2021',
      status: '',
      type: '',
      location: '',
      link: 'sd',
      document: 'asdasd',
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