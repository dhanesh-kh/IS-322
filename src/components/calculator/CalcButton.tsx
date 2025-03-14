import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CalculatorButtonProps } from '../../types/calculator';
import { theme } from '../../styles/theme';

export const CalcButton: React.FC<CalculatorButtonProps> = ({
    label,
    onPress,
    type,
    disabled = false,
}) => {
    const buttonStyle = [
        styles.button,
        styles[`${type}Button`],
        disabled && styles.disabled,
    ];

    const textStyle = [
        styles.text,
        styles[`${type}Text`],
        disabled && styles.disabledText,
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 72,
        height: 72,
        borderRadius: theme.borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing.xs,
        ...theme.shadows.sm,
    },
    numberButton: {
        backgroundColor: theme.colors.calculator.number,
    },
    operatorButton: {
        backgroundColor: theme.colors.calculator.operator,
    },
    functionButton: {
        backgroundColor: theme.colors.calculator.function,
    },
    equalsButton: {
        backgroundColor: theme.colors.calculator.equals,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        ...theme.typography.button,
    },
    numberText: {
        color: theme.colors.surface,
    },
    operatorText: {
        color: theme.colors.surface,
    },
    functionText: {
        color: theme.colors.text.primary,
    },
    equalsText: {
        color: theme.colors.surface,
    },
    disabledText: {
        color: theme.colors.text.disabled,
    },
}); 