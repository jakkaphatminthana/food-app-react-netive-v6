import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ route }) => {
    const id = route.params.id;

    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    //initState
    useEffect(() => {
        getResult(id);
    }, []);

    //result == null => EmptyScreen
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={style.image} />
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default ResultShowScreen;


///Changed log (V6)
/*
(1)
before
const ResultShowScreen = ({ navigation }) => {

after
const ResultsShowScreen = ({ route }) => {

(2)
before
const id = navigation.getParam('id');

after
const id = route.params.id;
*/