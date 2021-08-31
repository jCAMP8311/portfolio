import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    colors: {
        cyan: {
            default: '#00FFFF',
            hover: '#008B8B',
            disabled: '#E0FFFF'
        }
    },
})

export default customTheme
