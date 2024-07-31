import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Link } from 'expo-router';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { format } from 'date-fns';



export interface CliquesrowProps {
  id: string;
  name: string;
members: Array<string>;
  numberOfMembers: number;
  topics: Array<string>;
  lastMessage: string;
  date: string;
  cliqueAvatar: string;

}

const Cliquesrow: FC<CliquesrowProps> = ({ id, name, members, numberOfMembers, topics, cliqueAvatar, lastMessage, date }) => {
  return (
    <Link href={`/cliquechat/${id}`} asChild>
      <TouchableHighlight activeOpacity={0.6} underlayColor='lightgrey'>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingLeft: 20, paddingVertical: 10 }}>
          <Image source={{ uri: cliqueAvatar }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
            <Text
              style={{ fontSize: 13, color: '#888', fontWeight: '300' }}
              
              ellipsizeMode="tail"
            >{topics}</Text>
            <Text style={{ fontSize: 15, color: 'grey' }}
            numberOfLines={1}
            >
              {lastMessage.length > 40 ? `${lastMessage.substring(0, 40)}...` : lastMessage}
            </Text>
          </View>
          <Text style={{ color: 'grey', paddingRight: 20, alignSelf: 'flex-start' }}> {format(date, 'yyyy.MM.dd')} </Text>
        </View>
      </TouchableHighlight>
    </Link>
  )
}

export default Cliquesrow