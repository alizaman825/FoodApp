// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Example from './Example';
import Sample from './Sample';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};




function DrawerNavigation() {
  return (
    <>
        
      <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen
      name="Your Current Location"
        options={{drawerLabel:"Current Location",}}
        component={Example}
        />

        <Drawer.Screen
          options={{ drawerLabel: 'Search Any City' }}
          component={Sample}
          name="Search Your City"
        
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
 

    </>
  );
}

export default DrawerNavigation;
