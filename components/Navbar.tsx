import { Heading, Link, Spacer, Text, Button, useStyleConfig } from '@chakra-ui/react';

import Wallet from './Wallet';

import StyledFlex from './StyledFlex';

export default function Navbar(props) {

    const { variant, connected, ...rest } = props;

    return (
        <StyledFlex variant={ variant } { ...rest }>
            <StyledFlex p="10px" bg="interactive.purple" color="white">Icon</StyledFlex>
            <Text as="span" >Bankless Liquity</Text>
            <Spacer />
            <Link>Borrow</Link>
            <Link onDark>Deposit</Link>
            <Link>Stake</Link>
            {connected && <Wallet/>}
            <Button variant="outline" size="secondary" borderColor="interactive.purple" color="white">Connect Wallet</Button>
        </StyledFlex>
    )
}