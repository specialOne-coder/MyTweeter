import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import Tweet from '../components/Tweet';
import data from '../Data/tweets';
import Feed from '../components/Feed';
import NewTweetButton from '../components/NewTweetBtn';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Feed/>
       <NewTweetButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
