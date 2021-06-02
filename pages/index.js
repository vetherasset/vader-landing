import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Hero } from '../sections/Hero'
import { Features } from '../sections/Features'
import { Protection } from '../sections/Protection'
import { Stablecoin } from '../sections/Stablecoin'
import { Governance } from '../sections/Governance'

const Home = () => {

	return (
		<>
			<Head>
				<title>Vader - decentralized liquidity protocol</title>
			</Head>
			<Box maxWidth='75rem' m='0 auto' p={{ base: '0 1.25rem', md: '0 2.5rem' }}>
				<Hero/>
				<Features/>
				<Protection/>
				<Stablecoin/>
				<Governance/>
			</Box>
		</>
	)
}

export default Home