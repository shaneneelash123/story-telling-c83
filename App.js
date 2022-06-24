import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './Navigation/DrawerNavigator';

export default class App extends React.Component {
  render(){
    
    return (
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    );
  }

}
