import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'native-base'
import { colors } from '../../utils/colors'
import { EvilIcons } from '@expo/vector-icons';
import { sizes } from '../../utils/sizes';

export default function Links({link, title, }) {
  return (
    <Link 
    margin={2}
    color={colors.blackWashed} 
    href={link}>
      <Text style={{
        fontWeight: 'bold', 
        fontSize: sizes.regilarTextSmall,
        color: colors.blackWashed
        }}>{title}</Text>
      <View>
      <EvilIcons name="external-link" size={sizes.smallIocon} color="black" />
      </View>
    </Link>
  )
}