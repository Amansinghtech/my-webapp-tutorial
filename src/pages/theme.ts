import { Open_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles';
// import pelettemode
import { PaletteMode } from '@mui/material';



// update color palette to include a `neutral` and `destructive` color
declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
        destructive: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        destructive?: PaletteOptions['primary'];
    }
}



// my color palette
export const myTheme = {
    color: {
        neutral: {
            main: '#737373',
            "50": '#FAFAFA',
            "100": '#F5F5F5',
            "200": '#E5E5E5',
            "300": '#D4D4D4',
            "400": '#A3A3A3',
            "500": '#737373',
            "600": '#525252',
            "700": '#404040',
            "800": '#262626',
            "900": '#171717',
        },
        primary: {
            main: '#6366F1',
            "50": '#EEF2FF',
            "100": '#E0E7FF',
            "200": '#C7D2FE',
            "300": '#A5B4FC',
            "400": '#818CF8',
            "500": '#6366F1',
            "600": '#4F46E5',
            "700": '#4338CA',
            "800": '#3730A3',
            "900": '#312E81',
        },
        success: {
            main: '#22C55E',
            "50": '#F0FDF4',
            "100": '#DCFCE7',
            "200": '#BBF7D0',
            "300": '#86EFAC',
            "400": '#4ADE80',
            "500": '#22C55E',
            "600": '#16A34A',
            "700": '#15803D',
            "800": '#166534',
            "900": '#14532D',
        },
        warning: {
            main: '#F59E0B',
            "50": '#FFFBEB',
            "100": '#FEF3C7',
            "200": '#FDE68A',
            "300": '#FCD34D',
            "400": '#FBBF24',
            "500": '#F59E0B',
            "600": '#D97706',
            "700": '#B45309',
            "800": '#92400E',
            "900": '#78350F',
        },
        destructive: {
            "50": '#FEF2F2',
            "100": '#FEE2E2',
            "200": '#FECACA',
            "300": '#FCA5A5',
            "400": '#F87171',
            "500": '#EF4444',
            "600": '#DC2626',
            "700": '#B91C1C',
            "800": '#991B1B',
            "900": '#7F1D1D',
        }
    },
    text: {
        light: {
            active: 'rgba(0, 0, 0, 0.87);',
            inactive: 'rgba(0, 0, 0, 0.6);',
            disabled: 'rgba(0, 0, 0, 0.38);',
        },
        primaryLight: {
            active: 'rgba(99, 102, 241, 0.87);',
            inactive: 'rgba(99, 102, 241, 0.6);',
            disabled: 'rgba(99, 102, 241, 0.38);',
        },
        dark: {
            active: 'rgba(255, 255, 255, 0.87);',
            inactive: 'rgba(255, 255, 255, 0.6);',
            disabled: 'rgba(255, 255, 255, 0.38);',
        },
    }
};

// font
export const font = Open_Sans({
    weight: '400',
    subsets: ['greek', 'latin-ext'],
})

// main theme
export const theme = (createTheme({
    palette: {
        neutral: myTheme.color.neutral,
        primary: myTheme.color.primary,
        success: myTheme.color.success,
        warning: myTheme.color.warning,
        destructive: myTheme.color.destructive,
    },
    typography: {
        fontFamily: font.style.fontFamily,
    },
}))
