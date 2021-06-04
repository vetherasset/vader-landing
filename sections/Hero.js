import React from 'react'
import { Flex, Heading, Box, Button, useBreakpointValue, Image } from '@chakra-ui/react'
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
					The Father of Decentralized Liquidity
				</Heading>
				<Box as='h2' size='md' fontWeight='normal' textAlign='justify'>
				Become part of something bigger than yourself, a fairer financial system without a central authority.
				Swap, LP, borrow, lend, mint interest-bearing synths, and more, in a fairly distributed, governance-minimal protocol built to last.
				</Box>
				{/* <Button
					height='auto'
					width='auto'
					maxWidth='156px'
					variant='outline'
					onClick={startDapp}
				>
					<Box
						background='black'
						_hover={{
							backgroundImage: 'linear-gradient(90deg,#f472b6  0%, #3b82f6 100%)',
							backgroundSize: '150% auto',
							backgroundPosition: 'right center',
							color: 'black',
						}}
						height='auto'
						width='156px'
						lineHeight='46px'
						borderRadius='3px'
					>Open Dapp
					</Box>
				</Button> */}
			</Flex>

			<Flex {...style}>
				<Image
					src='/webp/hero.webp'
					width='100%'
					maxW='520px'
					alignSelf='flex-end'
					position={{ base: 'relative', lg: 'absolute' }}
					top={{ md: '-51px', lg: '69px' }}
				/>
			</Flex>
		</Flex>
	)
}
