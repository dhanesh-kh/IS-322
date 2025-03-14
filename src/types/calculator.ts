export type CalculatorButtonType = 'number' | 'operator' | 'function' | 'equals';

export interface CalculatorButtonProps {
    label: string;
    onPress: () => void;
    type: CalculatorButtonType;
    disabled?: boolean;
}

export interface CalcDisplayProps {
    value: string;
    expression: string;
}

export type Operation = '+' | '-' | '×' | '÷' | '=' | 'C' | '±' | '%' | '.';

export interface CalculatorState {
    displayValue: string;
    previousValue: string;
    operation: Operation | null;
    clearOnNext: boolean;
} 