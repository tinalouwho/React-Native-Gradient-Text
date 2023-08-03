import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GradientText from './app/screens/GradientText';
import Button from './components/Button'
import { Image } from 'expo-image';


export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
    <SafeAreaProvider>
    <View style={[styles.container, themeContainerStyle]}>
    <Image
  source={require('./assets/clogo.png')}
  style={{width: 120, height: 85}}
/>
      <GradientText text="Code Swap" style={{fontSize: 40, fontWeight: 900 }} />
      <Text style={{fontWeight: 500, fontSize: 15, fontWeight: 900}}>Build Faster. Look Better. Code Smarter.</Text>
      <Text style={{paddingHorizontal: 20, paddingVertical: 20, textAlign: 'center', fontSize: 15}}>The social app that connects front and back-end developers so you can barter, collaborate, or charge for services.</Text>
      <Button label='button' style={{backgroundColor: '#171717'}} />
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
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: 'white',
  },
});
