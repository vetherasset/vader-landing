import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Hero } from '../sections/Hero'

const Home = () => {

	return (
		<>
			<Head>
				<title>Vader - decentralized liquidity protocol</title>
			</Head>
			<Box maxWidth='75rem' m='0 auto' p={{ base: '0 1.25rem', md: '0 2.5rem' }}>
				<Hero/>
			</Box>
		</>
	)
}

export default Home