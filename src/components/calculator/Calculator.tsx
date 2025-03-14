import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CalcButton } from './CalcButton';
import { CalcDisplay } from './CalcDisplay';
import { Operation, CalculatorState } from '../../types/calculator';
import { theme } from '../../styles/theme';

const initialState: CalculatorState = {
    displayValue: '0',
    previousValue: '',
    operation: null,
    clearOnNext: false,
};

export const Calculator: React.FC = () => {
    const [state, setState] = useState<CalculatorState>(initialState);

    const handleNumberPress = (num: string) => {
        setState(prev => ({
            ...prev,
            displayValue: prev.clearOnNext ? num : prev.displayValue === '0' ? num : prev.displayValue + num,
            clearOnNext: false,
        }));
    };

    const handleOperationPress = (operation: Operation) => {
        switch (operation) {
            case 'C':
                setState(initialState);
                break;
            case '±':
                setState(prev => ({
                    ...prev,
                    displayValue: (parseFloat(prev.displayValue) * -1).toString(),
                }));
                break;
            case '%':
                setState(prev => ({
                    ...prev,
                    displayValue: (parseFloat(prev.displayValue) / 100).toString(),
                }));
                break;
            case '=':
                if (state.operation && state.previousValue) {
                    const prev = parseFloat(state.previousValue);
                    const current = parseFloat(state.displayValue);
                    let result = 0;

                    switch (state.operation) {
                        case '+': result = prev + current; break;
                        case '-': result = prev - current; break;
                        case '×': result = prev * current; break;
                        case '÷': result = prev / current; break;
                    }

                    setState({
                        displayValue: result.toString(),
                        previousValue: '',
                        operation: null,
                        clearOnNext: true,
                    });
                }
                break;
            default:
                setState({
                    displayValue: state.displayValue,
                    previousValue: state.displayValue,
                    operation,
                    clearOnNext: true,
                });
        }
    };

    return (
        <View style={styles.container}>
            <CalcDisplay
                value={state.displayValue}
                expression={state.previousValue && state.operation ? 
                    `${state.previousValue} ${state.operation}` : ''}
            />
            <View style={styles.buttonGrid}>
                <View style={styles.row}>
                    <CalcButton label="C" type="function" onPress={() => handleOperationPress('C')} />
                    <CalcButton label="±" type="function" onPress={() => handleOperationPress('±')} />
                    <CalcButton label="%" type="function" onPress={() => handleOperationPress('%')} />
                    <CalcButton label="÷" type="operator" onPress={() => handleOperationPress('÷')} />
                </View>
                <View style={styles.row}>
                    <CalcButton label="7" type="number" onPress={() => handleNumberPress('7')} />
                    <CalcButton label="8" type="number" onPress={() => handleNumberPress('8')} />
                    <CalcButton label="9" type="number" onPress={() => handleNumberPress('9')} />
                    <CalcButton label="×" type="operator" onPress={() => handleOperationPress('×')} />
                </View>
                <View style={styles.row}>
                    <CalcButton label="4" type="number" onPress={() => handleNumberPress('4')} />
                    <CalcButton label="5" type="number" onPress={() => handleNumberPress('5')} />
                    <CalcButton label="6" type="number" onPress={() => handleNumberPress('6')} />
                    <CalcButton label="-" type="operator" onPress={() => handleOperationPress('-')} />
                </View>
                <View style={styles.row}>
                    <CalcButton label="1" type="number" onPress={() => handleNumberPress('1')} />
                    <CalcButton label="2" type="number" onPress={() => handleNumberPress('2')} />
                    <CalcButton label="3" type="number" onPress={() => handleNumberPress('3')} />
                    <CalcButton label="+" type="operator" onPress={() => handleOperationPress('+')} />
                </View>
                <View style={styles.row}>
                    <CalcButton label="0" type="number" onPress={() => handleNumberPress('0')} />
                    <CalcButton label="." type="number" onPress={() => handleOperationPress('.')} />
                    <CalcButton label="=" type="equals" onPress={() => handleOperationPress('=')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: theme.spacing.md,
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    buttonGrid: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.sm,
    },
}); 