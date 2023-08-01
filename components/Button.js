import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Get Started' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  button: {
    borderRadius:25,
   paddingVertical: 10,
   paddingHorizontal: 60,
    backgroundColor: 'blue',
    shadowColor: 'blue',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13}, 
    margin: 20,
  },
text: {
  fontSize: 20,
  fontWeight: 900,
  color: 'white',
}

});