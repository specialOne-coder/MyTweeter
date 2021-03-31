import React from 'react'
import { Image,View } from 'react-native'
import LeftContainer from '../Tweet/LeftContainer'
import MainContainer from '../Tweet/MainContainer'
import {TweetType} from '../../types';
import styles from './style';


export type TweetProps = {
    tweet:TweetType
}

const Tweet = ({tweet}: TweetProps) => {
    return(
    <View style={styles.container}>
        <LeftContainer user={tweet.user}/>
        <MainContainer tweet={tweet}/>
    </View>
    );
}

export default Tweet;