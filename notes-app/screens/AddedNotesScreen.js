import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { fetchNotes } from '../helpers/db';

const AddedNotesScreen = props => {
    const loadNotes = () => {
        const dbResult = fetchNotes();
        console.log(dbResult)
        return dbResult;
    }
    return (
        <View style={styles.screen} >
            <Text>fwfewrfeef</Text>
            <FlatList 
                data={loadNotes}
                keyExtractor={item => item.note}
                renderItem={ ({itemData}) => {
                    <Text>{itemData.item.note}</Text>
                }
            }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddedNotesScreen;
