import React from 'react';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CalculatorScreen />
    </>
  );
} 