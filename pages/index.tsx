import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { 
  Link, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox
} from '@chakra-ui/react';
import {
  InfoIcon
} from '@chakra-ui/icons';

import StyledBox from '../components/StyledBox';
import StyledFlex from '../components/StyledFlex';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <InputGroup width="507px">
          <Input type="number" placeholder="Just an Input"/>
          <InputRightElement>
            <Button variant="maxBtn">Max</Button>
          </InputRightElement>
        </InputGroup>
        <NumberInput>
          <NumberInputField placeholder="a NumberInput"/>
          <InputRightElement>
            <Button variant="maxBtn">Max</Button>
          </InputRightElement>
        </NumberInput>
        <StyledBox>
          <Link onDark>Test</Link>
          <NumberInput onDark>
            <NumberInputField placeholder="a NumberInput"/>
            <InputRightElement>
              <Button variant="maxBtn">Max</Button>
            </InputRightElement>
          </NumberInput>
        </StyledBox>
        <StyledBox bg="interactive.white">
          <InputGroup>
            <Input type="number" placeholder="regular input"/>
            <InputRightElement>
              <Button variant="maxBtn">Max</Button>
            </InputRightElement>
          </InputGroup>
          <NumberInput>
            <NumberInputField placeholder="number input"/>
            <InputRightElement>
              <Button variant="maxBtn">Max</Button>
            </InputRightElement>
          </NumberInput>
          <NumberInput isInvalid>
            <NumberInputField placeholder="number input"/>
            <InputRightElement>
              <Button variant="maxBtn">Max</Button>
            </InputRightElement>
          </NumberInput>
          <Checkbox>Awesome!</Checkbox>
          <Checkbox isDisabled>Boo!</Checkbox>
        </StyledBox>
        <StyledBox bg="interactive.white">
          <Link>Test</Link>
          <Popover placement="top-start" trigger="hover">
            <PopoverTrigger>
              <InfoIcon color="interactive.purple"/>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                Liquidation reserve
              </PopoverHeader>
              <PopoverArrow bg="interactive.dark"/>
              <PopoverBody>
                When a borrower opens a new trove, an amount of 10 LUSD is reserved and held back by the protocol as a compensation for the gas costs if the trove needs to be liquidated at some point
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </StyledBox>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
