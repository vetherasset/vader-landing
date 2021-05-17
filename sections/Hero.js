import React from 'react'
import { Flex, Heading, Box, Button, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Hero = (props) => {

	const router = useRouter()

	const startDapp = (e) => {
		e.preventDefault()
		router.push(defaults.url.dapp)
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
		<Flex {...props} flexWrap={{ base: 'wrap-reverse', md: 'nowrap' }}>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					Decenetralized liquidity protocol
				</Heading>
				<Box as='h2' size='md' fontWeight='normal' textAlign='justify'>
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
				</Box>
				<Button
					size='lg'
					maxWidth='156px'
					variant='outline'
					onClick={startDapp}
				>
					Acquire now
				</Button>
			</Flex>

			<Flex {...style}>
			</Flex>
		</Flex>
	)
}
