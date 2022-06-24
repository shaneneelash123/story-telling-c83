import React from 'react'
import BottomTabNavigator from './TabNavigator'
import Profile from '../screens/profile'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer= createDrawerNavigator()

const DrawerNavigator=()=>{
    console.log("I am in the drawer navigator")
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>

    )
}

export default DrawerNavigator