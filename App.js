import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
    <SafeAreaProvider>
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.title, themeTextStyle]}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#f3f3f3',
  },
  darkContainer: {
    backgroundColor: '#1b1b1b',
  },
  lightThemeText: {
    color: '#1b1b1b',
  },
  darkThemeText: {
    color: '#f3f3f3',
  },
 
});
