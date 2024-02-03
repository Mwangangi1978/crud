import { extendTheme } from '@chakra-ui/react'
import '@fontsource/courier-prime';
import '@fontsource-variable/plus-jakarta-sans';

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans Variable', sans-serif`,
    body: ` 'Courier Prime', sans-serif`,
  },
})

export default theme;