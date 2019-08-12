// @flow
/* -----------Global----------*/
import React, {
  useMemo,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

/* -----------Styles----------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  close: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
/* -----------Types----------*/
type Props = {
  navigation: *
}
const ImageDetail = (props: Props) => {
  const themedStyles = useMemo(() => styles, []);
  const {
    navigation: {
      state: {
        params: {
          uri,
        },
      },
    },
  } = props;
  return (
    <View style={themedStyles.container}>
      <Image
        resizeMode="contain"
        style={themedStyles.image}
        source={uri}
      />
    </View>
  );
};
export default ImageDetail;
