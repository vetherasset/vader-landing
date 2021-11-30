import React from 'react'
import { Flex, Heading, Box, Button, useBreakpointValue, Image } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Protection = (props) => {

	const router = useRouter()

	const push = (e, href) => {
  	e.preventDefault()
		router.push(href)
	}

	const style = {
		w: { base: '100%', md: '50%' },
		minH: { base: '360px', md: '615px' },
		flexFlow: 'column',
		justifyContent: 'center',
	}

	const align = useBreakpointValue({
		base: 'center ',
		md: 'flex-end',
	})

	const width = useBreakpointValue({
		base: '83%',
		md: '',
	})

	return (
		<Flex {...props}
		flexWrap={{ base: 'wrap-reverse', md: 'nowrap' }}
		flexDir={{ base: 'column', md: 'row' }}
		>
			<Flex {...style} paddingRight='55px'>
				<Image
					src='/png/il-triangle.png'
					paddingLeft='59px'
					alignSelf='center'
				/>
			</Flex>

			<Flex {...style}>
				<Heading as='h3' textAlign='left' size='lg'>Impermanent Loss Protection</Heading>
				<Box as='h2' size='md' fontWeight='normal' textAlign='justify'>
					Provide liquidity for core, curated pools with Impermanent Loss Protection. A&nbsp;reward for those who help build a stronger system, Impermanent Loss Protection covers the risk you take by becoming a longer term core liquidity provider.
				</Box>
				<Button
				 		size='lg'
						maxW='118px'
						variant='linkAccent'
						rightIcon={<ArrowForwardIcon />}
						onClick={(e) => push(e, defaults.url.dapp)}
					>
						Launch Dapp
					</Button>
			</Flex>
		</Flex>
	)
}
