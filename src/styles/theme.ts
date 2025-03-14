import { colors } from './colors';

export const theme = {
    colors,
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    typography: {
        display: {
            fontSize: 40,
            fontWeight: '700' as const,
        },
        title: {
            fontSize: 28,
            fontWeight: '600' as const,
        },
        body: {
            fontSize: 16,
            fontWeight: '400' as const,
        },
        button: {
            fontSize: 24,
            fontWeight: '500' as const,
        },
    },
    borderRadius: {
        sm: 8,
        md: 12,
        lg: 16,
        full: 9999,
    },
    shadows: {
        sm: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    },
}; 