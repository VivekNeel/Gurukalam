// @flow

/* -----------Global----------*/
import React, {
  useMemo,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Text,
} from 'react-native-paper';

/* -----------Child components----------*/
import {
  Event,
  Image,
  StatusBar,
} from '../components';

/* -----------Constants----------*/
import {
  programs,
  infraStructure,
  infraStructures,
  imagesPath,
} from '../Constants';
/* -----------Styles----------*/
const getStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  welcome: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
    fontWeight: '400',
    letterSpacing: 2,
    fontFamily: 'DroidSans',
  },
  play: {
    color: 'green',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: '800',
    fontFamily: 'DroidSans',
  },
  infraStructureContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  infraStructureLabel: {
    fontSize: 28,
    color: 'black',
    alignSelf: 'center',
    marginVertical: 16,
    fontFamily: 'CaveatBrush-Regular',
  },
  image: {
    width: '100%',
    height: 300,
  },
  infraStructure: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 16,
  },
  infraStructures: {
    fontSize: 22,
    color: 'black',
    lineHeight: 32,
    marginVertical: 16,
    fontFamily: 'DroidSans',
    letterSpacing: 2,
    fontWeight: '400',
  },
  ourPrograms: {
    fontSize: 24,
    alignSelf: 'center',
    fontFamily: 'CaveatBrush-Regular',
    marginTop: 16,
  },
});

const Program = () => {
  const themedStyles = useMemo(() => getStyles(), []);

  return (
    <ScrollView style={themedStyles.container}>
      <StatusBar backgroundColor="rgb(54, 183, 96)" />
      <Text style={themedStyles.welcome}>WELCOME</Text>
      <Text style={themedStyles.play}>
        Play is the beginning of knowledge!
      </Text>
      <View style={themedStyles.infraStructureContainer}>
        <Text style={themedStyles.infraStructureLabel}>Infrastructure</Text>
        <Image
          imageStyles={themedStyles.image}
          imagePath={imagesPath.infraStructure}
        />
        <Text style={themedStyles.infraStructure}>{infraStructure}</Text>
        {infraStructures.map(item => (
          <Text style={themedStyles.infraStructures} key={item}>
            {item}
          </Text>
        ))}
        <Text style={themedStyles.ourPrograms}>Our Programs</Text>
        {programs.map(item => (
          <Event key={item.title} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Program;
