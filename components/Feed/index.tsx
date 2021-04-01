import * as React from 'react';
import { StyleSheet } from 'react-native';

import Tweet from '../Tweet';
import data from '../../Data/tweets';
import { View } from '../Themed';
import { FlatList } from 'react-native-gesture-handler';

const Feed = () => (
    <View style={{width:'100%'}}>
        <FlatList
            data={data}
            renderItem={({ item }) => <Tweet tweet={item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default Feed;