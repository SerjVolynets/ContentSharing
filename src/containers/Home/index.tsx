
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const Home = ({navigation}: any) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Content Sharing</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate('Log_in')}
            title="Sign in"
            color="#841584"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => null}
            title="Sign up"
            color="#754583"
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    flex: 2,
  },
  logoText: {
    fontSize: 32,
  },
  buttonsContainer: {
    flex: 3,
    padding: 20,
  },
  button: {
    paddingBottom: 20,
  }
});

export default Home;
