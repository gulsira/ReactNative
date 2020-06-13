import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import TakeImageScreen from '../screens/TakeImageScreen';
import AddedNotesScreen from '../screens/AddedNotesScreen';


const MainNavigator = createStackNavigator({
    Start: StartScreen,
    TakeImage: TakeImageScreen,
    AddedNotes: AddedNotesScreen
});

export default createAppContainer(MainNavigator);










