import React from 'react'
import { Image, View } from 'react-native'
import { TweetType, UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type LeftContainerProps = {
    user: UserType
}

const LeftContainer = ({user}: LeftContainerProps) => {
    return (
        <View>
            <ProfilePicture size={75} image={user.image} />
        </View>
    );
}

export default LeftContainer;