// @flow

/* -----------Global----------*/
import React, {
  useMemo,
} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import {
  Button,
  Text,
  Card,
} from 'react-native-paper';

/* -----------Contants----------*/
import {
  imagesPath,
  whys,
  extraCur,
  extraCurDesc,
  contactData,
} from '../Constants';

/* -----------Child components----------*/
import {
  Image,
} from '../components';

/* -----------Styles----------*/
const getStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    margin: 24,
    alignSelf: 'center',
    backgroundColor: '#43A047',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  kidsSchool: {
    fontSize: 20,
    color: 'black',
    marginBottom: 16,
    fontFamily: 'CaveatBrush-Regular',
  },
  homeTwo: {
    flex: 1,
    width: null,
    height: null,
  },
  aboutUs: {
    marginTop: 16,
    fontSize: 24,
    color: 'black',
    fontFamily: 'CaveatBrush-Regular',
    textAlign: 'center',
  },
  whyContainer: {
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
    letterSpacing: 2,
    fontFamily: 'CaveatBrush-Regular',
  },
  desc: {
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 24,
  },
  contactItemContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontFamily: 'DroidSans',
    fontSize: 18,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: 'white',
    marginTop: 24,
    marginBottom: 16,
  },
});

type Props = {
  navigation: *
}
const Home = (props: Props) => {
  const themedStyles = useMemo(() => getStyles(), []);
  const {
    navigation,
  } = props;
  return (
    <ScrollView style={themedStyles.container}>
      <ImageBackground
        source={imagesPath.homeOne}
        style={themedStyles.homeTwo}
        resizeMode="contain"
      >
        <ImageBackground style={themedStyles.circle}>
          <Text style={themedStyles.kidsSchool}>Kids School</Text>
          <Button
            onPress={() => {
              navigation.navigate('Program');
            }}
            theme={{ colors: { primary: 'black' } }}
            mode="contained"
            style={themedStyles.findOutMore}
          >
           Our Programs
          </Button>
        </ImageBackground>
      </ImageBackground>
      <Text style={themedStyles.aboutUs}>About Us</Text>
      <View
        style={{
          marginHorizontal: 16,
        }}
      >
        {whys.map(item => (
          <View key={item.title} style={themedStyles.whyContainer}>
            <Image imagePath={item.image} imageStyles={themedStyles.image} />
            <Text style={themedStyles.title}>{item.title}</Text>
            <Text style={themedStyles.desc}>{item.desc}</Text>
          </View>
        ))}
        <Image
          imagePath={imagesPath.homeOne}
          imageStyles={themedStyles.image}
        />
        <Text style={themedStyles.title}>{extraCur}</Text>
        {extraCurDesc.map(item => (
          <Text key={item} style={[themedStyles.desc]}>
            {item}
          </Text>
        ))}
        <Card elevation={8} style={themedStyles.card}>
          <Card.Title
            titleStyle={{ textAlign: 'center' }}
            title="Contact Us:"
          />
          {contactData.map(item => (
            <Text
              style={[
                themedStyles.contactItemContainer,
                {
                  textDecorationLine: item.isClickable
                    ? 'underline'
                    : undefined,
                },
              ]}
              key={item.t}
              disabled={!item.isClickable}
              onPress={() => {
                if (item.t.includes('.com')) {
                  Linking.openURL(
                    `mailto:${
                      item.t
                    }?subject=Gurukalm Contact&body=type your message here`,
                  );
                } else {
                  Linking.openURL(`tel:${item.t}`);
                }
              }}
            >
              {item.t}
            </Text>
          ))}
          <Card.Content />
        </Card>
      </View>
    </ScrollView>
  );
};
export default Home;
