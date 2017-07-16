import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Home = ({ navigation }) => {

    return (
        <View>
            <TouchableHighlight onPress={() => navigation.navigate('Example')}><Text>Home</Text></TouchableHighlight>
        </View>
    );
};

export default Home;
