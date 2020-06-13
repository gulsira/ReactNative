import React from 'react';

import MainNavigator from './navigation/MainNavigator';
import { init } from './helpers/db';

init().then(() => {
  console.log('Database is initialized.');
})
.catch(err => {
  console.log('Database is failed.');
  console.log(err);
});

export default function App() {
  return (
    <MainNavigator />
  );
}

