import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { insertNote } from '../helpers/db';

const StartScreen = props => {
    const [note, setNote] = useState('');

    const inputHandler = (note) => {
        setNote(note);
    }

    const insertToDb = (note, imageUri) => {
        imageUri = null
        const dbResult = insertNote(note,imageUri)
        
    }

    return (
        <View style={styles.screen} >
            <TextInput
                style={styles.inputContainer}
                placeholder="Add Your Note"
                multiline
                numberOfLines={3}
                onChangeText={inputHandler}
                value={note}
            />
            <View style={styles.buttonContainer} >
                <Button 
                    title='Add Note'
                    color={Colors.primay}
                    onPress={() => {
                        Alert.alert('Are you sure?', 'Note will be added.',[{
                            text:'Okay',
                            onPress: () => {insertToDb(note)}    
                        }])
                    console.log(note);
                    setNote('')
                    }} 
                />
                <View style={{marginTop: 20}} >
                <Button
                    title='Add Note With Picture'
                    color={Colors.primay}
                    onPress={() => {
                        props.navigation.navigate('TakeImage')
                    }}
                />
                </View>
                <View style={{marginTop: 20}} >
                <Button
                    title='Go to Your Notes'
                    color={Colors.primay}
                    onPress={() => {
                        props.navigation.navigate('AddedNotes')
                    }}
                />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '80%',
        marginTop: 15
    },
    inputContainer: {
        margin: 15,
        height: '20%',
        borderColor: '#ccc',
        borderWidth: 1,
        width: '80%',
        textAlignVertical: 'top',
        alignItems: 'center'
        

    }
});

export default StartScreen;
