// @flow

/* -----------Global----------*/
import React, {
  useMemo,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

/* -----------Child components----------*/

/* -----------Third party----------*/
import {
  Text,
  TextInput,
  Button,
} from 'react-native-paper';
import sendEmail from 'react-native-email';
import {
  StatusBar
} from '../components';

/* -----------Utils----------*/
import {
  isEmpty,
} from '../utils';
import {
  emailTo,
} from '../Constants';

/* -----------Styles----------*/
const getStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
  contactUs: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginTop: 16,
    fontFamily: 'CaveatBrush-Regular',
    fontWeight: '400',
  },
  admissionOpen: {
    fontSize: 18,
    textAlign: 'center',
    color: '#212121',
    marginTop: 24,
    fontFamily: 'DroidSans',
    letterSpacing: 2,
  },
  textinputContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  message: {
    height: 200,
    marginVertical: 8,
  },
});

const Contact = () => {
  const themedStyles = useMemo(() => getStyles(), []);
  const [parent, setParent] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [child, setChild] = useState('');
  const [childdob, setChildDOB] = useState('');
  const [message, setMessage] = useState('');
  const [sendPress, setSendPress] = useState(false);

  const isAnyFieldEmpty = () => isEmpty(parent)
  || isEmpty(email)
  || isEmpty(contact)
  || isEmpty(child)
  || isEmpty(childdob)
  || isEmpty(message);

  const onSendPress = () => {
    const to = [emailTo];
    if (!isAnyFieldEmpty()) {
      sendEmail(to, {
        subject: 'Gurukalam contact',
        body: `ParentName : ${parent} \n
  Email : ${email} \n
  Contact : ${contact} \n
  Child : ${child} \n
  Child date of birth : ${childdob} \n
  Message : ${message}`,
      });
      setSendPress(false);
    } else {
      setSendPress(!sendPress);
    }
  };

  return (
    <ScrollView style={themedStyles.container}>
      <StatusBar backgroundColor="rgb(54, 183, 96)" />
      <View style={themedStyles.container}>
        <Text style={themedStyles.admissionOpen}>ADMISSION ENQUIRY</Text>
        {/* -------- Render fields --------- */}
        <View style={themedStyles.textinputContainer}>
          <TextInput
            label={"Parent/Guardian's Name"}
            style={{ marginVertical: 8 }}
            mode="outlined"
            placeholder={"Parent/Guardian's Name"}
            onChangeText={(text: string) => setParent(text)}
            error={!!(sendPress && isEmpty(parent))}
            value={parent}
          />
          <TextInput
            label="Email Address"
            style={{ marginVertical: 8 }}
            placeholder="Email Address"
            mode="outlined"
            error={!!(sendPress && isEmpty(email))}
            onChangeText={(emailText: string) => setEmail(emailText)}
            value={email}
          />

          <TextInput
            label="Contact Number"
            placeholder="Contact Number"
            style={{ marginVertical: 8 }}
            mode="outlined"
            error={!!(sendPress && isEmpty(contact))}
            onChangeText={(text: string) => setContact(text)}
            value={contact}
          />

          <TextInput
            label={"Child's Name"}
            placeholder={"Child's Name"}
            style={{ marginVertical: 8 }}
            mode="outlined"
            error={!!(sendPress && isEmpty(child))}
            onChangeText={(text: string) => setChild(text)}
            value={child}
          />

          <TextInput
            label={"Child's Date of Birth"}
            placeholder={"Child's Date of Birth"}
            style={{ marginVertical: 8 }}
            mode="outlined"
            error={!!(sendPress && isEmpty(childdob))}
            onChangeText={(text: string) => setChildDOB(text)}
            value={childdob}
          />

          <TextInput
            style={themedStyles.message}
            placeholder="Message"
            mode="outlined"
            error={!!(sendPress && isEmpty(message))}
            onChangeText={(text: string) => setMessage(text)}
            multiline
            value={message}
          />

          <Button
            mode="contained"
            disabled={isAnyFieldEmpty()}
            style={{ marginVertical: 8 }}
            onPress={() => {
              onSendPress();
            }}
          >
            {'SEND'}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;
