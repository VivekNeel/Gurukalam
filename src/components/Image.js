// @flow
/* -----------Global----------*/
import React, {
  useMemo,
} from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

/* -----------Styles----------*/
const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

type Props = {
  imageStyles: ?*,
  imagePath: string,
  resizeMode: ?string
}
const RenderImage = (props: Props) => {
  const {
    imageStyles,
    imagePath,
    resizeMode = 'contain',
  } = props;
  const themedStyles = useMemo(() => styles, []);
  const iStyles = themedStyles.image;

  return (
    <Image
      resizeMode={resizeMode}
      style={[iStyles, { ...imageStyles }]}
      // eslint-disable-next-line global-require
      source={imagePath}
    />
  );
};

export default RenderImage;
