import { Box, Center } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export const Image = (props: ImageProps) => {
  const { alt, width, children, ...rest } = props

  return (
    <Center
      my="12"
      _first={{
        marginTop: '0',
      }}
    >
      <Box width={width}>
        <NextImage alt={props.alt} width={width} {...rest} quality={50} />
        {props.children && (
          <Box
            as="figcaption"
            bg="surfaceDark"
            py="3"
            px="4"
            textAlign="center"
            fontSize="sm"
            mt="-8px"
            borderBottomRadius="lg"
            sx={{
              a: {
                color: 'primary',
              },
            }}
          >
            {props.children}
          </Box>
        )}
      </Box>
    </Center>
  )
}
