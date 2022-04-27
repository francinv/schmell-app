import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CallToAction: React.FC = () => {
  async function handleClick() {
    const url = 'mailto:schmellapp@gmail.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Kontakt oss</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#FFD700',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'CCBiffBamBoomW00-Regular',
    color: '#141400',
    textAlign: 'center',
    padding: 5,
  },
});

export default CallToAction;
