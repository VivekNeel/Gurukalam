// @flow
/* -------------------Globals----------------------- */

import React from 'react';
import { StatusBar } from 'react-native';

type Props = {
  backgroundColor: ?string
}
const CustomStatusBar = (props: Props) => {
  const statusBarStyle = 'dark-content';
  const {
    backgroundColor,
  } = props;
  return (
    <StatusBar
      barStyle={statusBarStyle}
      backgroundColor={backgroundColor || 'white'}
    />
  );
};

export default CustomStatusBar;
