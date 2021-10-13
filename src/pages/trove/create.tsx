import React, { useContext } from 'react'
import { Box, Stack, Heading, Flex } from '@chakra-ui/react'
import StyledBox from '../../components/StyledBox'
import TroveProvider, { TroveContext } from './TroveContext'
import Stepper from '../../components/Steps'

const TroveHeader = () => {
  return (
    <StyledBox bg='auto' variant='section'
        borderRadius='18px'>
        <Flex flexDirection='row'
          color='black'
          justifyContent="space-between"
          alignContent='flex-start'
          >
          <div>Borrow LUSD</div>
          <Stepper />
        </Flex>
    </StyledBox>
  )
}

const TroveForm = () => {
  const {loan, addLoan } = useContext(TroveContext)

  return (
    <StyledBox
      h="calc(100vh - 300px)"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      p="5"
      w={["100%", "70%"]}
      bg="gray"
    >
      <TroveHeader />
      <div>hi, i am a form</div>
    </StyledBox>
  )
}

const TroveSidebar = () => {
  const {loan, addLoan } = useContext(TroveContext)

  return (
    <Flex
      maxHeight="calc(100vh - 305px)"
      height='auto'
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      w={["100%", "25%"]}
      bg="auto"
    >
      <StyledBox bg="white" variant='section'
        borderRadius='18px'>
        <Flex flexDirection='row'
          color='black'
          justifyContent="space-between"
          alignContent='flex-start'
          >
          <div>Liquidation Risk</div>
          <div>LOW</div>
        </Flex>
        <Flex color='black'>
          The risk that your Trove may become subject to liquidation,
          taking into account the extra risk of liquidation during recovery mode.
          Learn More
        </Flex>
      </StyledBox>
      <StyledBox bg="white" color='black'
        borderRadius='18px'>
        <Flex flexDirection='row'
          color='black'
          justifyContent="space-between"
          alignContent='flex-start'
          >
          <div>Current Collateralization ratio</div>
          <div>160%</div>
        </Flex>
      </StyledBox>
      <StyledBox bg="white" color='black'
        borderRadius='18px'>
        <Flex flexDirection='row'
          color='black'
          justifyContent="space-between"
          alignContent='flex-start'
          >
          <div>Redemption Risk</div>
          <div>HIGH</div>
        </Flex>
        <div>The risk that your Trove may be repaid by redeemers</div>
        <div>Learn more</div>
      </StyledBox>
    </Flex>
  )
}

const TroveCreate = () => (
  <TroveProvider loan={""} addLoan={function (name: string): void {
    throw new Error("Function not implemented.")
  } }>
    <Flex
      h='100%'
      direction="row"
    >
      <TroveForm />
      <TroveSidebar />
    </Flex>
  </TroveProvider>
)

export default TroveCreate


