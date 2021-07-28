import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ListCrawl from '../screens/Home';
import Building from '../screens/Building';
import StackProfile from '../navigations/StackProfile';
import notifiapp from '../screens/notifiapp';
import colors from '../utils/colors';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.cyan,
        },
      }}>
      <Stack.Screen
        name="Danh sách việc từ trang"
        component={ListCrawl}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
function BuilDingScreen() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#39ac39',
        },
      }}>
      <Stack.Screen
        name="Top công ty"
        component={Building}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
function NotifyScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.cyan,
        },
      }}>
      <Stack.Screen
        name="Nhận thông báo"
        component={notifiapp}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
function ProfileScreen() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff944d',
        },
      }}>
      <Stack.Screen
        name="Cá nhân"
        component={StackProfile}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}

export {HomeStackScreen, BuilDingScreen, NotifyScreen, ProfileScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
