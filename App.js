import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import AppRotas from './src/rotas/AppRotas';
import Produtor from './src/telas/produtor';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRotas />
      {/* <Produtor /> */}
    </SafeAreaView>
  );
}
