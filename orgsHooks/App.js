/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/tela/Home'

function App() {
  return <SafeAreaView styles={estilos.tela}>
    <Home />
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})
export default App;
