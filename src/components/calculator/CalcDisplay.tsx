import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalcDisplayProps } from '../../types/calculator';
import { theme } from '../../styles/theme';

export const CalcDisplay: React.FC<CalcDisplayProps> = ({ value, expression }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.expression} numberOfLines={1}>
                {expression}
            </Text>
            <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.calculator.display,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.lg,
        marginBottom: theme.spacing.md,
        minHeight: 120,
        justifyContent: 'flex-end',
    },
    expression: {
        color: theme.colors.text.secondary,
        fontSize: theme.typography.body.fontSize,
        textAlign: 'right',
        marginBottom: theme.spacing.sm,
    },
    value: {
        color: theme.colors.surface,
        ...theme.typography.display,
        textAlign: 'right',
    },
}); 