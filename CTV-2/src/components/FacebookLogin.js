import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigations/AuthProvider';

export default function FBLoginButton() {
  const {fbLogin} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.FBlogin} onPress={() => fbLogin()}>
        <Icon
          style={styles.icon}
          name="facebook-square"
          size={30}
          color="white"></Icon>
        <Text style={styles.text}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 295,
    height: 90,
    alignSelf: 'center',
  },
  FBlogin: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#054696',
    padding: 9,
    borderRadius: 5,
    borderColor: 'gray',
  },
  icon: {
    flex: 1 / 3,
  },
  text: {
    flex: 2 / 3,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
