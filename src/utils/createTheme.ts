import { extendTheme } from '@chakra-ui/react'
import { TinyColor } from '@ctrl/tinycolor'

const themes = {
  1: {
    primary: '#aa8878',
    surface: '#F4EBE2',
    textProminent: '#41393E',
    divider: '#8a897b',
  },
  2: {
    primary: '#ec8db0',
    surface: '#4C3B4D',
    textProminent: '#FFEEDB',
    divider: '#ADA8B6',
  },
  3: {
    primary: '#9AB87A',
    surface: '#403141',
    textProminent: '#f3faeb',
    divider: '#939abe',
  },
  4: {
    primary: '#47859f',
    surface: '#eae7e6',
    textProminent: '#272c41',
    divider: '#7c7877',
  },
  5: {
    primary: '#9bc8eb',
    surface: '#2a2a3d',
    textProminent: '#B5BEC6',
    divider: '#BFB1C1',
  },
  6: {
    primary: '#ECAE8B',
    surface: '#2f3644',
    textProminent: '#fff',
    divider: '#9dbaca',
  },
}

export type ThemeNumber = keyof typeof themes

export function createTheme(number: ThemeNumber) {
  const { divider, primary, surface, textProminent } = themes[number]

  const text = new TinyColor(textProminent).setAlpha(0.85).toRgbString()
  const textSubdued = new TinyColor(textProminent).setAlpha(0.7).toRgbString()
  const surfaceDark = new TinyColor(surface).darken(3).toHexString()
  const surfaceDarkHover = new TinyColor(surface).darken(2).toHexString()

  return extendTheme({
    fonts: {
      heading: 'Plantin MT Pro',
      body: 'Apercu Pro',
      mono: 'Mona Lisa',
    },
    colors: {
      primary,
      surface,
      divider,
      surfaceDark,
      surfaceDarkHover,
      text,
      textSubdued,
      textProminent,
    },
    components: {
      Heading: {
        baseStyle: {
          color: textProminent,
          fontWeight: '400',
        },
        Text: {
          baseStyle: {
            fontSize: ['16px', '18px'],
            lineHeight: '1.6',
            letterSpacing: '.4px',
          },
        },
      },
    },
    shadows: {
      outline: '0 0 0 2px',
      outlineColor: 'primary',
    },
    styles: {
      global: {
        body: {
          backgroundColor: surface,
          color: text,
          lineHeight: '1.6',
        },
        'p, ul, ol': {
          lineHeight: '1.6',
          fontSize: ['16px', '18px'],
          letterSpacing: '.4px',
        },
        'b, i, em, strong': {
          color: textProminent,
        },
      },
    },
  })
}
