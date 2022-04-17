
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './containers/Home/index';
import Log_in from './containers/Log_in';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Log_in" component={Log_in}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
