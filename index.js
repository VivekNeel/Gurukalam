/**
 * @format
 */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AppContainer from './src/AppContainer';
import { name as appName } from './app.json';
import StatusBar from './src/components/StatusBar';

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: 'DroidSans',
    medium: 'DroidSans-Bold',
    light: 'DroidSans',
    thin: 'DroidSans',
  },
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'yellow',
  },
};
export default function Root() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar />
      <AppContainer />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(appName, () => Root);
