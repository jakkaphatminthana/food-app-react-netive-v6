import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ResultCardDetail from "./result_card_detail";

// const ResultList = (props) => {
const ResultList = ({ title, results }) => {
    const navigation = useNavigation();

    //isEmpty case
    if (!results.length) {
        return null;
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(
                                'ResultShow',
                                { id: item.id },
                            )}
                        >
                            <ResultCardDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 4,
    },
});

export default ResultList;

///Changed Log
/*
(1)
before
import { withNavigation } from 'react-navigation';

after
import { useNavigation } from "@react-navigation/native";

(2)
before
const ResultList = ({ title, results, navigation }) => {

after
const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();
**/