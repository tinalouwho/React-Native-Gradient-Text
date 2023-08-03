import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'GET STARTED' } = props;
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
    backgroundColor: '#7E7EFF',
    shadowColor: '7E7EFF',
    shadowOpacity: 0.3,
    elevation: 4,
    shadowRadius: 5 ,
    shadowOffset : { width: 1, height: 13}, 
    margin: 20,
  },
text: {
  fontSize: 12,
  fontWeight: 'bold',
  color: 'black',
}

});