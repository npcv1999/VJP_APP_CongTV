import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import {AuthContext} from '../navigations/AuthProvider';

//Sign-in function

export default function GoogleSign() {
  const {googleLogin} = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <GoogleSigninButton
          style={{width: 300, height: 60}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => googleLogin()}
        />
      </View>
    </>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
