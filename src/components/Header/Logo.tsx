import NextLink from 'next/link'
import { Heading, Link } from '@chakra-ui/react'
import { useToken } from '@chakra-ui/react'

export const Logo = () => (
  <NextLink href="/" passHref>
    <Link
      mr="8px"
      display="flex"
      alignItems="center"
      borderRadius="base"
      _hover={{ textDecoration: 'none' }}
    >
      <LogoIcon />
      <Heading
        as="span"
        ml={2}
        fontWeight="400"
        fontSize="2xl"
        lineHeight={1}
        mt="6px"
        color="textProminent"
        sx={{
          '@media screen and (max-width: 500px)': {
            display: 'none',
          },
        }}
      >
        Saihaj Law 
      </Heading>
    </Link>
  </NextLink>
)

function LogoIcon() {
  const primaryColor = useToken('colors', 'primary')

  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={primaryColor} />
      <path
        d="M16.598 16.242c-.417 0-.487-.545-.285-1.271.153-.556 1.036-2.605 1.56-4.427.525-1.822.114-3.114-1.271-3.114-.86 0-1.605.418-2.305 1.364.214-1.53-.496-2.38-1.49-2.354-.875.021-1.588.456-2.208 1.216.313-1.635-.51-2.277-1.403-2.255-1.583.039-3.208 1.534-4.354 4.75-.09.252-.023.343.077.434.117.107.132.11.282.197.243.14.408-.03.458-.152.95-2.269 2.165-3.86 2.85-3.876.424-.01.359.627.11 1.381-.213.65-2.859 8.487-2.932 8.704-.074.218.012.457.193.476l.58.064c.461.05.856.05 1.07-.489.06-.152.651-1.875 1.291-3.762 1.198-3.56 2.12-5.331 3.129-5.331.498 0 .668.51.271 1.799-.196.635-1.866 5.508-2.431 7.177-.11.323-.032.52.24.548.226.024.337.034.495.048.569.052.94-.006 1.07-.36.058-.154.76-2.18 1.415-4.101 1.048-2.877 1.909-4.141 2.649-4.141.625 0 .607.702.085 2.18-.29.823-1.032 2.747-1.285 3.717-.422 1.616.031 2.706 1.416 2.721 1.315.015 2.243-.962 2.762-1.557 1.048-1.203.397-1.84-.063-1.256-.458.58-1.456 1.67-1.976 1.67z"
        fill="#fff"
      />
    </svg>
  )
}
