import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadScreens from './screens/ReadScreens';
import WriteScreens from './screens/WriteScreens';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
        
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreens},
 Read: {screen: ReadScreens},
});

const AppContainer =  createAppContainer(TabNavigator);


