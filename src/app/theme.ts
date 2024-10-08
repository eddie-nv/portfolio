import { createTheme } from '@mantine/core';
import '/public/font/fonts.css';

export const theme = createTheme({
    fontFamily: `Infra, sans-serif`,
    fontSizes: {
        xl: '3rem',
        lg: '2rem',
        md: '1.25rem',
        sm: '1rem',
        xs: '0.5rem',
    },
    headings: {
        fontFamily: `Infra, sans-serif`,
        sizes: {
            h1: { fontSize: '5rem',    fontWeight: '700', lineHeight: '0.9'},
            h2: { fontSize: '3rem' },
            h3: { fontSize: '2rem',    fontWeight: '700' },
            h4: { fontSize: '1.25rem', fontWeight: '400' },
            h5: { fontSize: '1rem',    fontWeight: '500', lineHeight: '1.2'},
            h6: { fontSize: '0.5rem' }
        }
    }
});
