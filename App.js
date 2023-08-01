import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GradientText from './app/screens/GradientText';
import Button from './components/Button'


export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
    <SafeAreaProvider>
    <View style={[styles.container, themeContainerStyle]}>
      <GradientText text="Code Swap" style={{fontSize: 60, fontWeight: 900 }} />
      <Text style={{fontWeight: 500, fontSize: 17, fontWeight: 900}}>Build Faster. Look Better. Code Smarter.</Text>
      <Text style={{paddingHorizontal: 20, paddingVertical: 20, textAlign: 'center', fontSize: 20}}>The social app that connects front and back-end developers so you can barter, collaborate, or charge for services.</Text>
      <Button label='button' style={{backgroundColor: '#171717'}} />
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
