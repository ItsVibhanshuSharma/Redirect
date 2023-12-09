import React from 'react';
import {Button, Linking, View} from 'react-native';

const App = () => {
  const call = () => {
    Linking.openURL('tel: + 9548880111');
  };

  const whatsApp = () => {
    Linking.openURL('whatsapp://send?phone=7669785550');
  };

  const openGmail = () => {
    Linking.openURL('mailto:codervibhanshusharma.com');
  };

  const openInstagramProfile = () => {
    Linking.openURL('instagram://user?username=theishubhaiya');
  };

  return (
    <View>
      <Button title="call" onPress={() => call()} />

      <Button title="Whats App" onPress={() => whatsApp()} />

      <Button title="Gmail" onPress={() => openGmail()} />
      <Button title="Instagram" onPress={() => openInstagramProfile()} />
    </View>
  );
};

export default App;
