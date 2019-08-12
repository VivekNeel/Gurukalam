// @flow
import React from 'react';
import {
  View,
} from 'react-native';
/* -----------Third party----------*/
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* -----------Constanst----------*/
import {
  imagesPath,
} from './Constants';
/* -----------Child components----------*/
import { Image } from './components';

/* -----------Screens----------*/
import {
  Home,
  Gallery,
  Program,
  Contact,
  ImageDetail,
} from './screens';

const routeName = {
  Home: 'Home',
  Gallery: 'Gallery',
  Program: 'Programs',
  Contact: 'Enquiry',
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      header:
  <Image
    imagePath={imagesPath.banner}
    imageStyles={{
      height: 64,
      width: 150,
    }}
  />,
    },
  },
});

const GalleryStack = createStackNavigator(
  {
    Gallery: {
      screen: Gallery,
      navigationOptions: {
        title: 'Gallery',
        headerStyle: {
          backgroundColor: 'rgb(54, 183, 96)',
        },
      },
    },
    ImageDetail: {
      screen: ImageDetail,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Gallery',
  },
);

const ProgramStack = createStackNavigator({
  Program: {
    screen: Program,
    navigationOptions: {
      title: 'Programs',
      headerStyle: {
        backgroundColor: 'rgb(54, 183, 96)',
      },
    },
  },
});

const ContactStack = createStackNavigator({
  Enquiry: {
    screen: Contact,
    navigationOptions: {
      title: 'Enquiry',
      headerStyle: {
        backgroundColor: 'rgb(54, 183, 96)',
      },
    },
  },
});


const DrawerNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Gallery: GalleryStack,
    Programs: ProgramStack,
    Enquiry: ContactStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName: rName } = navigation.state;
        let iconName = 'menu';
        switch (rName) {
          case routeName.Home:
            iconName = 'home';
            break;
          case routeName.Gallery:
            iconName = 'image';
            break;
          case routeName.Program:
            iconName = 'library-books';
            break;
          case routeName.Contact:
            iconName = 'account-box';
            break;
          default:
            iconName = 'menu';
        }
        return <Icon name={`${iconName}`} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontFamily: 'DroidSans',
      },
    },
  },
);


export default createAppContainer(DrawerNavigator);
