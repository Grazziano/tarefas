import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Task from './src/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([
    {
      key: '1',
      item: 'Comprar pão',
    },
    {
      key: '2',
      item: 'Estudar React Native',
    },
    {
      key: '3',
      item: 'Descansar',
    },
    {
      key: '4',
      item: 'Pagar conta de luz',
    },
  ]);

  function handleAdd() {
    alert('Tarefa: ' + task);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite sua tarefa..."
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Task data={item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272E',
    paddingTop: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#73F3FF',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  list: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingStart: '4%',
    paddingEnd: '4%',
  },
});
