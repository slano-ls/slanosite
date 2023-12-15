import { Heading } from '@chakra-ui/react'
import { Footnote as Note } from './Footnote'
import { LinkTooltip as Tip } from './LinkTooltip'

export const History = () => (
  <Heading
    fontSize={['lg', 'xl', '2xl']}
    lineHeight="1.4"
    as="p"
    fontWeight="normal"
    color="textProminent"
  >
    I started my <Note name="programming career" words="programming career" /> through learning how to modify <Note name="MacOS" words="MacOS" /> for customization purposes.{' '}
    After that I began learning more about low-level programming, and developed an interest in <Tip name="stationery">Cybersecurity</Tip> working on all kinds of{' '}
    <Tip name="fun">new projects</Tip> {' '}
    I then began growing a deep interest in <Note name="optimization" words="Optimization" />. I've done some work as a{' '}
    <Tip name="lettering">researcher</Tip>,{' '}
    <Tip name="illustrator">backend-developer</Tip>, and{' '}
    <Tip name="applesec">penetration tester</Tip> and am continuing to try and
    learn new fields of programming.
    <br />
    <br />I've done a lot of work with productivity tools, and have switched 
    my focus from apps like <Tip name="brave">Obsidian & Anytype</Tip> to tools like 
    <Tip name="crypto"> Emacs</Tip> and for the past 5+ years
    I&apos;ve been working on open source development for the Emacs project.
    <br />
    <br />
    These days I split my time between working as a security researcher at{' '}
    <Tip name="applesec">Apple</Tip> and spending time at school. I
    like <Note name="jazz" words="Jazz Music" />
    , <Note name="cryptocurrency" words="Soccer" />, and{' '}
    <Tip name="aprilia">stationery</Tip>. If you let me too close to your
    laptop I&apos;ll <Note name="organize" words="modify it" />.
  </Heading>
)
