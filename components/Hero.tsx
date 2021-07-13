import { Heading, Link, Spacer, Text, Button, useStyleConfig } from '@chakra-ui/react';

import StyledFlex from './StyledFlex';

export default function Hero(props) {

    const { variant, connected, ...rest } = props;

    return (
        <StyledFlex variant={ variant } { ...rest }>
            <Heading variant="h1" paddingBottom="18px">Interest-Free liquidity at your figertips</Heading>
            <Text>Draw our LUSD stablecoin against ETH at 0% Interest.</Text>
            <Link>Test</Link>
        </StyledFlex>
    )
}