import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from './colors';
import { MaterialIcons } from '@expo/vector-icons';

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
      status: 'overdue',
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

export const profileSections = {
   education: {
      title : 'Education',
      icon: <Entypo name="graduation-cap" size={24} color="black" />
   },
   workExperience: {
      title: 'Work Experience',
      icon: <FontAwesome name="suitcase" size={24} color="black" />
   },
   interests: {
      title: 'Interests',
      icon: <AntDesign name="hearto" size={24} color="black" />
   }

}

export const education = [
   {
      key: 1,
      title: 'Dallas Institute',
      degree: 'Computer Science Grade 2, DLI40123'
   },
   {
      key: 'addKey',
      addIcon: <MaterialIcons name="add" size={30} color={colors.blackPrimary}/>
   }
]

export const experience = [
   {
      key: 1,
      title: 'TCS - Full Time',
      position: 'Backend Engineer',
      dateStart: 'Jan, 2019',
      dateEnd: 'May, 2020'
   },
   {
      key: 2,
      title: "Sonata Software - Part Time",
      position: 'Backend and Network Engineer',
      dateStart: 'July, 2018',
      dateEnd: 'Dec, 2019'
   },
   {
      key: 'addKey',
      addIcon: <MaterialIcons name="add" size={30} color={colors.blackPrimary} />
   }
] 

export const interests = [
   {
      key: 1,
      title: 'Music'
   },
   {
      key: 2,
      title: 'Tennis'
   },
   {
      key: 3,
      title: 'Painting'
   },
   {
      key: 'addKey',
      addIcon: <MaterialIcons name="add" size={30} color={colors.blackPrimary} />
   }
] 

export const social = [
   {
      key: 1,
      icon: <AntDesign name="mail" size={24} color="black" />
   },
   {
      key: 2,
      icon: <Feather name="phone-call" size={24} color="black" />
   },
   {
      key: 3,
      icon: <MaterialCommunityIcons name="web" size={24} color="black" />
   },
   {
      key: 4,
      icon: <Feather name="linkedin" size={24} color="black" />
   },
   {
      key: 5,
      icon: <Feather name="facebook" size={24} color="black" />
   },
   {
      key: 6,
      icon: <AntDesign name="instagram" size={24} color="black" />
   }
]

export const todoType = [
   {
      key: 1,
      label: 'todo1 type',
      value: 'todo1'
   },
   {
      key: 2,
      label: 'todo2 type',
      value: 'todo2',
   },
   {
      key: 3,
      label: 'todo3 type',
      value: 'todo3',
   },
   {
      key: 4,
      label: 'todo4 type',
      value: 'todo4'
   },
]  

export const links = [
   {
      id: 1,
      title: 'Montgomery College website',
      url: 'Montgomery College website'
   },
   {
      id: 2,
      title: 'Montgomery College Instagram handle',
      url: 'Montgomery College Instagram handle'
   },
   {
      id: 3,
      title: 'Montgomery College facebook page',
      url: 'Montgomery College facebook page'
   }
]