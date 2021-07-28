import React from 'react';
import {View} from 'react-native';
import FBLoginButton from '../components/FacebookLogin';
import GoogleSign from '../components/GoogleSign';

export default function ButtonSocial() {
  return (
    <>
      <GoogleSign></GoogleSign>
      <View style={{height: 10}}></View>
      <FBLoginButton></FBLoginButton>
    </>
  );
}
