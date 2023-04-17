/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <MenuProvider>
        <RootStack />
      </MenuProvider>
    </NavigationContainer>
  );
};
export default App;
