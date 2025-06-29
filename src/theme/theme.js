import { createContext } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        primary: {
          100: '#d3d4de',
          200: '#a6a9be',
          300: '#7a7f9d',
          400: '#4d547d',
          500: '#21295c',
          600: '#191f4a',
          700: '#101637',
          800: '#080d25',
          900: '#040712',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
      }
    : {
        grey: {
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d1d1d1',
          400: '#c2c2c2',
          500: '#b3b3b3',
          600: '#8f8f8f',
          700: '#6b6b6b',
          800: '#474747',
          900: '#242424',
        },
        primary: {
          100: '#eaf0f7',
          200: '#d5e1ef',
          300: '#c0d1e7',
          400: '#abc2df',
          500: '#96b2d7',
          600: '#788eac',
          700: '#5a6b81',
          800: '#3c4756',
          900: '#1e242b',
        },
        greenAccent: {
          100: '#f0fbf7',
          200: '#e2f7ef',
          300: '#d3f2e7',
          400: '#c5eedf',
          500: '#b6e9d7',
          600: '#92bba9',
          700: '#6d8c7f',
          800: '#495e54',
          900: '#242f2a',
        },
        redAccent: {
          100: '#fcf2f2',
          200: '#fae5e5',
          300: '#f7d8d8',
          400: '#f5cbcb',
          500: '#f2bebe',
          600: '#c29898',
          700: '#917272',
          800: '#614b4b',
          900: '#302626',
        },
        blueAccent: {
          100: '#f0f1fd',
          200: '#e2e3fb',
          300: '#d3d6f9',
          400: '#c5c8f7',
          500: '#b6bbf5',
          600: '#9296c4',
          700: '#6d7093',
          800: '#494b62',
          900: '#242531',
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[900],
              alt: colors.primary[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
              alt: '#fcfcfc',
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
