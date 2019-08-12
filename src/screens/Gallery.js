// @flow

/* -----------Global----------*/
import React, {
  useMemo,
} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import { TouchableRipple } from 'react-native-paper';

/* -----------Contants----------*/
import {
  gallery,
} from '../Constants';

/* -----------Child components----------*/
import {
  Image,
  StatusBar,
} from '../components';

/* -----------Styles----------*/
const getStyles = () => StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
  },
  item: {
    margin: 10,
    flex: 1,
  },
  image: {
    width: '100%',
  },
});
type Props = {
   navigation: *
}
const Gallery = (props: Props) => {
  const themedStyles = useMemo(() => getStyles(), []);
  const {
    navigation,
  } = props;
  return (
    <View style={themedStyles.container}>
      <StatusBar backgroundColor="rgb(54, 183, 96)" />
      <FlatList
        data={gallery}
        renderItem={({ item }) => (
          <TouchableRipple
            rippleColor="green"
            onPress={() => navigation.navigate("ImageDetail", { uri: item })}
            style={themedStyles.item}
          >
            <Image
              imageStyles={themedStyles.image}
              key={item}
              imagePath={item}
              resizeMode="cover"
            />
          </TouchableRipple>
        )}
        numColumns={2}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Gallery;
