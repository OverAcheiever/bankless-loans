import { Heading, Link, Spacer, Text, Button, useStyleConfig } from '@chakra-ui/react';


export default function Footer(props) {

    const { variant, connected, ...rest } = props;

    return (
        <StyledFlex variant={ variant } { ...rest }>
            <StyledFlex p="10px" bg="interactive.purple" color="white">Icon</StyledFlex>
            <Text as="span" >Bankless Liquity</Text>
            <Spacer />
            <Link variant="light">Borrow</Link>
            <Link variant="light">Deposit</Link>
            <Link variant="light">Stake</Link>
            {connected && <Wallet/>}
            <Button variant="outline" size="secondary" borderColor="interactive.purple" color="white">Connect Wallet</Button>
        </StyledFlex>
    )
}