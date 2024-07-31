import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Link } from 'expo-router';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { format } from 'date-fns';



export interface ChatrowProps {
  id: string;
  fullName: string;
  school: string;
  yearOfStudy: string;
  programme: string;
  avatar: string;
  lastmessage: string;
  read: boolean;
  date: string;
  unreadcount: number;

}

const Chatrow: FC<ChatrowProps> = ({ id, fullName, school, yearOfStudy, programme, avatar, lastmessage, read, unreadcount, date }) => {
  return (
    <Link href={`/friendchat/${id}`} asChild>
      <TouchableHighlight activeOpacity={0.6} underlayColor='lightgrey'>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingLeft: 20, paddingVertical: 10 }}>
          <Image source={{ uri: avatar }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{fullName}</Text>
            <Text
              style={{ fontSize: 13, color: '#888', fontWeight: '300' }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{school} | {yearOfStudy} | {programme}</Text>
            <Text style={{ fontSize: 15, color: 'grey' }}
            numberOfLines={1}
            >
              {lastmessage.length > 40 ? `${lastmessage.substring(0, 40)}...` : lastmessage}
            </Text>
          </View>
          <Text style={{ color: 'grey', paddingRight: 20, alignSelf: 'flex-start' }}> {format(date, 'yyyy.MM.dd')} </Text>
        </View>
      </TouchableHighlight>
    </Link>
  )
}

export default Chatrow