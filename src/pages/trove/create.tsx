import React, { useContext } from 'react'
import { Box, Stack, Heading, Flex, Input, Button } from '@chakra-ui/react'
import StyledBox from '../../components/StyledBox'
import TroveProvider, { TroveContext } from './TroveContext'

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

export const EditableRow = () => ({
  label,
  inputID,
  unit,
  amount
}) => {
    <Flex flexDirection='row'
      color='black'
      justifyContent="space-between"
      alignContent='flex-start'
    >
      <Input
        autoFocus
        id={inputID}
        type="number"
        step="any"
        defaultValue={amount}
        onChange={e => {
        }}
        onBlur={() => {
        }}
        variant="editor"
      />
    </Flex>
};

const TroveCreate = () => (
  <TroveProvider loan={""} addLoan={function (name: string): void {
    throw new Error("Function not implemented.")
  } }>
    <Flex
      h='100%'
      direction="row"
    >
      <TroveForm />
    </Flex>
  </TroveProvider>
)

export default TroveCreate


