import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Fulano');

  function handlemudaNome() {
    // alert('TESTE');
    setName('Grazziano');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={handlemudaNome}>
        <Text style={styles.buttonText}>Mudar nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingTop: 28,
  },
  title: {
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
