import { Box, Link, Flex } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'

interface ItemProperties {
  href: string
  label: React.ReactNode
}

const Item = ({ href, label }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {label}
  </Link>
)

export const Footer = () => (
  <Box maxW="5xl" marginX="auto" as="footer">
    <DashDivider mt="80px" mb="24px" />
    <Flex gap="12px" wrap="wrap" fontSize="sm">
      <Item
        aria-label="Send email"
        href="mailto:laws0817@gmail.com"
        label="Email"
      />
      /
      <Item
        aria-label="Navigate to Linkedin Profile"
        href="https://www.linkedin.com/in/saihaj-law-404b46244/"
        label="Linkedin"
      />
      /
      <Item
        aria-label="Navigate to CSEC Blog"
        href="https://slano-ls.github.io"
        label="Cybersecurity"
      />
      /
      <Item
        aria-label="Navigate to GitHub Profile"
        href="https://www.github.com/slano-ls"
        label="GitHub"
      />

    </Flex>
  </Box>
)
