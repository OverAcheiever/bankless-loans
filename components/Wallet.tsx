import { Text } from '@chakra-ui/react';


// Wallet should return an icon, and balances.
export default function Wallet({ mx } : { mx?: string }) {
    return (
        <Text mx={mx} color="white">Connected!</Text>
    )
}