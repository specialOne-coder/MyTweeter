import React from 'react'
import { Image, View, Text } from 'react-native'
import { TweetType, UserType } from '../../../../types';
import styles from './style';
import { Entypo, Feather, EvilIcons } from '@expo/vector-icons'

export type FooterContainerProps = {
    tweet: TweetType
}

const Footer = ({ tweet }: FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Feather  name={"message-circle"} size={20} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfComment}</Text>
        </View>
        <View style={styles.icon}>
            <Feather name={"repeat"} size={20} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfRetweet}</Text>
        </View>
        <View style={styles.icon}>
            <Feather name={"heart"} size={20} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>
        </View>
        <View style={styles.icon}>
            <Feather name={"share-2"} size={20} color={'gray'}/>
            <Text style={styles.number}></Text>
        </View>
    </View>

)

export default Footer;