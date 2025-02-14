import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { selectLiquityState } from '../state/home/hooks';
import { fetchHomeState } from '../state/home/actions';

import { Box, Text, Flex, Heading, Button, Stack } from '@chakra-ui/react';
import StyledBox from '../components/StyledBox';

export default function Home() {
    // Liquity state values presentation

    const liquityState = useAppSelector(selectLiquityState);
    const lusdDepositAmountString = Math.floor(
        (liquityState?.tokensInStabilityPool ?? 0) / 1000000
    ).toString();
    const lqtyDepositAmountString = Math.floor(
        (liquityState?.totalLQTYTokensStaked ?? 0) / 1000000
    ).toString();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHomeState());
    }, []);

    return (
        <Box p='5' borderRadius='18px'>
            {/* This is her0 section */}
            <Flex bg='white' h='310px' direction='column' borderRadius='18px'>
                <Heading mt='105px' ml='120px' color='#6257DE'>
                    Interest-free liquidity at your fingertips
                </Heading>
                <Text mt='5px' ml='120px' lineHeight='22px' color='#6257DE'>
                    Draw our LUSD stablecoin against ETH at 0% interest.
                </Text>
            </Flex>
            {/* ------------------------------------------------------ */}

            {/* About Liquity section - this section cover TVL, LUSD, LQTY */}
            <Stack direction={['column', 'row']} my='3' spacing='3'>
                <StyledBox
                    h='500px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                    p='5'
                    w={['100%', '25%']}
                    bg='white'
                >
                    <Heading
                        textAlign='left'
                        size='md'
                        color='#6257DE'
                        fontWeight='900'
                        fontSize='30px'
                        lineHeight='32px'
                        letterSpacing='0.5'
                    >
                        Get rewards by depositing LUSD in stability pool
                    </Heading>
                    <Text textAlign='center' size='sm' color='#6257DE'>
                        Earn LQTY rewards and liquidation gains for securing
                        Liquity by providing LUSD to the Stability Pool.
                    </Text>
                    <Button
                        mt='3'
                        size='md'
                        bg='#6257DE'
                        width='200px'
                        height='40px'
                        variant='outline'
                        ml='auto'
                        mr='auto'
                    >
                        Deposit LUSD
                    </Button>
                    <hr />
                    <Box borderRadius='18px' color='#6257DE'>
                        <Text>Already deposited</Text>
                        <Heading>{lusdDepositAmountString}M LUSD</Heading>
                        <Box>
                            <img src=''></img>
                        </Box>
                    </Box>
                </StyledBox>
                <StyledBox
                    p='5'
                    rounded='md'
                    w={['100%', '50%']}
                    color='#6257DE'
                    bg='white'
                >
                    <Heading textAlign='center'>
                        Borrow against collateral
                    </Heading>
                    <Stack mt='3' direction={['column', 'row']}>
                        <Box h='200px' w={['100%', '60%']} bg='palette.red'>
                            Image
                        </Box>
                        <Stack p='3' direction='column'>
                            <Text>Total value locked</Text>
                            <Text>123.213444.</Text>
                        </Stack>
                    </Stack>
                    <Stack
                        textAlign='center'
                        mt='3'
                        p='5'
                        direction={['column', 'row']}
                        borderRadius='18px'
                    >
                        <Text>some info here</Text>
                        <Text>some other info there</Text>
                        <Text>and some more</Text>
                    </Stack>
                </StyledBox>
                <StyledBox
                    h='500px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                    p='5'
                    w={['100%', '25%']}
                    bg='white'
                >
                    <Heading
                        textAlign='left'
                        size='md'
                        color='#6257DE'
                        fontWeight='900'
                        fontSize='30px'
                        lineHeight='32px'
                        letterSpacing='0.5'
                    >
                        Earn fees by stacking LQTY
                    </Heading>
                    <Text mt='20px'>
                        Stake LQTY to earn the fees from borrowing and
                        redemptions
                    </Text>
                    <Button
                        size='md'
                        width='200px'
                        height='40px'
                        variant='outline'
                        ml='auto'
                        mr='auto'
                        mt='100px'
                    >
                        Stake LQTY
                    </Button>
                    <hr />
                    <Box borderRadius='18px'>
                        <Text>Already deposited</Text>
                        <Heading>{lqtyDepositAmountString}M LQTY</Heading>
                        <Box>
                            <img src=''></img>
                        </Box>
                    </Box>
                </StyledBox>
            </Stack>
            {/* ------------------------------------------------------------------------------------- */}
            {/* How it works */}
            <Stack
                direction='column'
                p='5'
                color='#6257DE'
                bg='white'
                borderRadius='18px'
            >
                <Heading>How it works</Heading>
                <Box
                    display='flex'
                    justifyItems='center'
                    flexDirection='column'
                >
                    <Stack
                        justifyContent='center'
                        direction={['column-reverse', 'row']}
                        my='3'
                        spacing='3'
                    >
                        <Box>
                            <img src='#'></img>
                        </Box>
                        <Box>Text</Box>
                    </Stack>
                    <Stack
                        justifyContent='center'
                        direction={['column-reverse', 'row']}
                        my='3'
                        spacing='3'
                    >
                        <Box>
                            <img src='#'></img>
                        </Box>
                        <Box>Text</Box>
                    </Stack>
                    <Stack
                        justifyContent='center'
                        direction={['column-reverse', 'row']}
                        my='3'
                        spacing='3'
                    >
                        <Box>
                            <img src='#'></img>
                        </Box>
                        <Box>Text</Box>
                    </Stack>
                </Box>
            </Stack>
            <StyledBox mt='3' p='5' bg='white' color='#6257DE'>
                <Heading size='md'>Fees and charges</Heading>
                <Stack
                    mt='3'
                    justifyContent='space-around'
                    direction={['column', 'row']}
                >
                    <Box>
                        <Text as='b' fontSize='sm'>
                            title
                        </Text>
                        <Text fontSize='xs'>descirption</Text>
                    </Box>
                    <Box>
                        <Text as='b' fontSize='sm'>
                            title
                        </Text>
                        <Text fontSize='xs'>descirption</Text>
                    </Box>
                    <Box>
                        <Text as='b' fontSize='sm'>
                            title
                        </Text>
                        <Text fontSize='xs'>description</Text>
                    </Box>
                </Stack>
            </StyledBox>
        </Box>
    );
}
