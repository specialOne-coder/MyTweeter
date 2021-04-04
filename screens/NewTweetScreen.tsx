import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import Tweet from '../components/Tweet';
import data from '../Data/tweets';
import Feed from '../components/Feed';
import NewTweetButton from '../components/NewTweetBtn';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';

export default function HomeScreen() {

    const [tweet, setTweet] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");

    const onPostTweet = () => {
        console.warn(`Tweet Post:${tweet} ,
                      Image Url: ${ imageUrl }`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name='close' size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={tweet}
                        multiline={true}
                        onChangeText={(value) => setTweet(value)}
                        numberOfLines={3}
                        style={styles.tweetInput}
                        placeholder={"What's Happen"}
                    />
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder={"Image url optionnal"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
    },
    tweetInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20
    },
    imageInput: {

    }
});
