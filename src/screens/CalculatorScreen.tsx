import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

type OperatorType = '+' | '-' | '×' | '÷' | null;

export const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<OperatorType>(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberPress = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorPress = (op: OperatorType) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEquals = () => {
    const first = parseFloat(firstValue);
    const second = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '×':
        result = first * second;
        break;
      case '÷':
        result = first / second;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  const renderButton = (text: string, onPress: () => void, isOperator = false) => (
    <TouchableOpacity
      style={[styles.button, isOperator && styles.operatorButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isOperator && styles.operatorText]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('C', handleClear)}
          {renderButton('±', () => setDisplayValue((parseFloat(displayValue) * -1).toString()))}
          {renderButton('%', () => setDisplayValue((parseFloat(displayValue) / 100).toString()))}
          {renderButton('÷', () => handleOperatorPress('÷'), true)}
        </View>
        <View style={styles.row}>
          {renderButton('7', () => handleNumberPress('7'))}
          {renderButton('8', () => handleNumberPress('8'))}
          {renderButton('9', () => handleNumberPress('9'))}
          {renderButton('×', () => handleOperatorPress('×'), true)}
        </View>
        <View style={styles.row}>
          {renderButton('4', () => handleNumberPress('4'))}
          {renderButton('5', () => handleNumberPress('5'))}
          {renderButton('6', () => handleNumberPress('6'))}
          {renderButton('-', () => handleOperatorPress('-'), true)}
        </View>
        <View style={styles.row}>
          {renderButton('1', () => handleNumberPress('1'))}
          {renderButton('2', () => handleNumberPress('2'))}
          {renderButton('3', () => handleNumberPress('3'))}
          {renderButton('+', () => handleOperatorPress('+'), true)}
        </View>
        <View style={styles.row}>
          {renderButton('0', () => handleNumberPress('0'))}
          {renderButton('.', () => handleNumberPress('.'))}
          {renderButton('=', handleEquals, true)}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  display: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 70,
  },
  buttonContainer: {
    flex: 0.6,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 35,
    margin: 5,
    height: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  operatorButton: {
    backgroundColor: '#f1a33c',
  },
  operatorText: {
    color: '#fff',
  },
}); 