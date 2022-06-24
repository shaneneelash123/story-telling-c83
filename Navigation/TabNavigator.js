import React from 'react'
import {StyleSheet} from 'react-native'
import Feed from '../screens/feed';
import Creatstory from '../screens/createstory';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {RFValue} from "react-native-responsive-fontsize"

const Tab=createMaterialBottomTabNavigator()

const BottomTabNavigator=()=>{
  console.log("I am in the tabnavigator")
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabstyle}
        screenOptions={ ({route})=> ({
          tabBarIcon:({focused, size, color} )=>{
            let iconName;
            if (route.name=="Feed"){
              iconName= focused? 'home' : 'home-outline'
            }
            else if (route.name=="Create Story"){
              iconName= focused? 'add-circle' : 'add-circle-outline'
            }
            return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons}/>
            }
          })
        }

      
        activeTintColor={'#ee8249'}
        inactiveTintColor={'gray'}
    
          
      >
        <Tab.Screen  name="Feed" component={Feed}  />
        <Tab.Screen  name="Create Story" component={Creatstory} />

      </Tab.Navigator>

    )
}

const styles= StyleSheet.create({
  bottomTabstyle:{
    backgroundColor:'#2f345d',
    height:"8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    overflow: 'hidden',
    position:'absolute'
  },
  icons:{
    width: RFValue(30),
    height:RFValue(30)
  }
})
export default BottomTabNavigator