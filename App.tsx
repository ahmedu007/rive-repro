import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Rive from 'rive-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Rive Solar Animation
        </Text>
        <Text
          style={[
            styles.subtitle,
            {color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          Powered by Rive React Native
        </Text>

        <View style={styles.riveContainer}>
          <Rive
            resourceName="avatar"
            style={styles.riveAnimation}
            stateMachineName="avatar"
          />
        </View>

        <View style={styles.riveContainer}>
          <Rive
            url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
            artboardName="Avatar 1"
            stateMachineName="avatar"
            style={{width: 400, height: 400}}
          />
        </View>

        <Text
          style={[
            styles.description,
            {color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          This animation is loaded from assets/rive/solar.riv
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 40,
  },
  riveContainer: {
    width: 300,
    height: 300,
    marginBottom: 40,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  riveAnimation: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
