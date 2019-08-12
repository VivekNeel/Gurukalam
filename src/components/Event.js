// @flow
/* -----------Global----------*/
import React, {
  useMemo,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Text,
  Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* -----------Styles----------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
  title: {
    color: 'green',
    fontSize: 24,
    fontFamily: 'CaveatBrush-Regular',
    fontWeight: '400',
  },

  age: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'DroidSans',
  },
  ageValue: {
    color: '#212121',
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'DroidSans',
  },
  eventDetailLabel: {
    color: 'green',
    alignSelf: 'baseline',
  },
  eventDetailContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    fontFamily: 'DroidSans',
  },
  divider: {
    marginTop: 24,
  },
});

type Props = {
  title: string,
  age: string,
  eventDetails: string
}
const Event = (props: Props) => {
  const {
    title,
    age,
    eventDetails,
  } = props;
  const themedStyles = useMemo(() => styles, []);
  const [eventPress, setEventPress] = useState(false);

  const iconName = eventPress ? 'minus' : 'plus';
  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>{title}</Text>
      <Text style={themedStyles.age}>Age</Text>
      <Text style={themedStyles.ageValue}>{age}</Text>
      {eventPress
        ? <Text style={themedStyles.eventDetailContent}>{eventDetails}</Text>
        : null}
      <Button
        mode="outlined"
        style={themedStyles.eventDetailLabel}
        onPress={() => {
          setEventPress(!eventPress);
        }}
        icon={({ size, color }) => (
          <Icon
            name={iconName}
            size={size}
            color={color}
          />
        )}
      >
EVENT DETAILS
      </Button>
      <Divider
        style={themedStyles.divider}
      />
    </View>
  );
};

export default Event;
