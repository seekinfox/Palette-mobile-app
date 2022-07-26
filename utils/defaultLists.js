import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from './colors';
import { MaterialIcons } from '@expo/vector-icons';

const TodoInterface = [ //for reference...
    {
      id: '',
      title: '',
      date: 'Jun 20 2021',
      status: 'live',
      type: '',
      location: 'location xyz',
      link: '',
      document: 'das',
   },
]
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
      icon: <Entypo name="graduation-cap" size={24} color={colors.blackOff} />
   },
   workExperience: {
      title: 'Work Experience',
      icon: <FontAwesome name="suitcase" size={24} color={colors.blackOff} />
   },
   interests: {
      title: 'Interests',
      icon: <AntDesign name="hearto" size={24} color={colors.blackOff} />
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
      label: 'Global',
      value: 'global'
   },
   {
      key: 2,
      label: 'Discrete',
      value: 'discrete',
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

export const todoDetails = {
   name: 'Apply to Montgomery college',
   user: {
      username: 'username',
      date: '',
   },
   completedBy: '',
   description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique enim dolor dignissimos nemo, consequuntur hic repellat et explicabo unde, ullam adipisci corporis atque in fugiat minima ratione? Nesciunt, nam ea.',
   links: links
}