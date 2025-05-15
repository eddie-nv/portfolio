import { createTheme } from '@mantine/core';
import { Open_Sans } from 'next/font/google';
import '/public/font/fonts.css';

const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const theme = createTheme({
    fontFamily: openSans.style.fontFamily,
    fontFamilyMonospace: `FilsonPro, sans-serif`,
    fontSizes: {
        xl: '4rem',
        lg: '2.5rem',
        md: '1.3rem',
        sm: '1rem',
        xs: '0.5rem',
    },
    headings: {
        fontFamily: `FilsonPro, sans-serif`,
        sizes: {
            h1: { fontSize: '5rem',    fontWeight: '700', lineHeight: '0.9'},
            h2: { fontSize: '3rem' },
            h3: { fontSize: '2rem',    fontWeight: '700' },
            h4: { fontSize: '1.25rem', fontWeight: '400' },
            h5: { fontSize: '1rem',    fontWeight: '500', lineHeight: '1.2'},
            h6: { fontSize: '0.5rem' }
        },
    },
    colors: {
        'red': ['#FFF5F5', '#FFF5F5', '#FFF5F5', '#FFF5F5', '#FFF5F5', '#FFF5F5', '#FA5252', '#FA5252', '#FA5252', '#FA5252'],
        'blue': ['#E7F5FF', '#E7F5FF', '#E7F5FF', '#E7F5FF', '#E7F5FF', '#E7F5FF', '#228BE6', '#228BE6', '#228BE6', '#228BE6'],
        'green': ['#EBFBEE', '#EBFBEE', '#EBFBEE', '#EBFBEE', '#EBFBEE', '#EBFBEE', '#40C057', '#40C057', '#40C057', '#40C057'],
        'yellow': ['#FFFED4', '#FFFED4', '#FFFED4', '#FFFED4', '#FFFED4', '#FFFED4', '#FA9252', '#FA9252', '#FA9252', '#FA9252'],
        'gray': ['#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA', '#CACACA'],
    },
    black: '#141414',   
});

export const globalTheme = {
    common: {
        letterSpacing: '1.8px',
        height: '100%',
    },
    dark: {
        backgroundColor: `var(--mantine-color-black)`,
        color: 'var(--mantine-color-white)',
    }
}