import React from 'react'
import { Flex, Heading, Box, useBreakpointValue, Image, Link } from '@chakra-ui/react'

export const Join = (props) => {

	const style = {
		w: { base: '100%' },
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

	const row = {
		flexDirection: 'row',
		mb: '4.3rem',
	}

	const col = {
		width: '100%',
		p: '0 3.33rem',
	}

	const p = {
		textAlign: 'center',
	}

	return (
		<Flex {...props} flexWrap={{ base: 'wrap-reverse', md: 'nowrap' }}>
			<Flex {...style}>
				<Flex {...row}>
					<Box {...col}>
							<Heading as='h3' textAlign='center' size='md' textStyle='noLigs'>Join the Community</Heading>
							<Box as='p' {...p}>The Vader Protocol is built by the community. Come help us build a fairer financial system.</Box>
							<Flex flexFlow='row' justifyContent='space-evenly' m='3rem 0'>
								<Link href='https://t.me/vaderprotocol' isExternal>
									<Image
										width='64px'
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88.7 73.9'%3E%3Cdefs/%3E%3Cdefs%3E%3ClinearGradient id='a' x2='88.7' y1='36.9' y2='36.9' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff9ddb'/%3E%3Cstop offset='.1' stop-color='%23f99ddc'/%3E%3Cstop offset='.2' stop-color='%23ea9ede'/%3E%3Cstop offset='.4' stop-color='%23d09fe3'/%3E%3Cstop offset='.6' stop-color='%23aba0e9'/%3E%3Cstop offset='.7' stop-color='%237ca1f0'/%3E%3Cstop offset='.9' stop-color='%2344a3f9'/%3E%3Cstop offset='1' stop-color='%2326a4fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg data-name='Layer 2'%3E%3Cpath fill='url(%23a)' d='M72.6 14.8c1.6-1.5-.4-2.3-2.6-.8L23.3 43.2 3.2 36.9c-4.4-1.3-4.5-4.3 1-6.4L82.7.4c3.6-1.4 6.8.8 5.6 6.3L75 69.4c-1 4.4-3.6 5.5-7.4 3.5l-20.3-15-9.9 9.4a5.1 5.1 0 01-4 2l1.4-20.6z' data-name='Layer 1'/%3E%3C/g%3E%3C/svg%3E%0A"
									/>
								</Link>
								<Link href='https://discord.gg/vaderprotocol' isExternal>
									<Image
										width='64px'
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 84.7 58'%3E%3Cdefs/%3E%3Cdefs%3E%3ClinearGradient id='a' x2='84.7' y1='29' y2='29' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff9ddb'/%3E%3Cstop offset='.1' stop-color='%23f29ddd'/%3E%3Cstop offset='.3' stop-color='%23d19ee2'/%3E%3Cstop offset='.5' stop-color='%239ba0eb'/%3E%3Cstop offset='.8' stop-color='%2351a3f7'/%3E%3Cstop offset='1' stop-color='%2326a4fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg data-name='Layer 2'%3E%3Cpath fill='url(%23a)' d='M74 7.3C64.7.4 55.9.1 54.2.1l-1 1A47.4 47.4 0 0171 10a65.6 65.6 0 00-53.8-2.3l-4.3 1.9c.2-.2 6-5.8 18.7-8.8l-.8-.8S21-.4 10.5 7.3c0 0-10.5 18-10.5 40.3 0 0 5.8 10 21.8 10.4l4.7-5.8a23 23 0 01-12.5-8l3 1.5c8.8 3.5 18.1 8 34.7 5.4A54.4 54.4 0 0062.2 48a84.8 84.8 0 008.1-4.2c0 .1-3.6 5.4-12.8 8 1.9 2.7 4.6 5.8 4.6 5.8 16-.4 22.2-10.4 22.6-10C84.7 25.4 74 7.3 74 7.3zM29 40.7a7.7 7.7 0 010-15.3 7.7 7.7 0 010 15.3zm26.5 0a7.7 7.7 0 010-15.3 7.7 7.7 0 010 15.3z' data-name='Layer 1'/%3E%3C/g%3E%3C/svg%3E%0A"
									/>
								</Link>
								<Link href='https://twitter.com/vaderprotocol/' isExternal>
									<Image
										width='64px'
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88.2 71.7'%3E%3Cdefs/%3E%3Cdefs%3E%3ClinearGradient id='a' x2='88.2' y1='35.8' y2='35.8' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff9ddb'/%3E%3Cstop offset='.1' stop-color='%23f29ddd'/%3E%3Cstop offset='.3' stop-color='%23d19ee2'/%3E%3Cstop offset='.5' stop-color='%239ba0eb'/%3E%3Cstop offset='.8' stop-color='%2351a3f7'/%3E%3Cstop offset='1' stop-color='%2326a4fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg data-name='Layer 2'%3E%3Cpath fill='url(%23a)' d='M79.2 17.9a51.1 51.1 0 01-51.5 53.8A51 51 0 010 63.6a34.2 34.2 0 004.3.2 36.4 36.4 0 0022.5-7.7 18.3 18.3 0 01-17-12.6 16 16 0 003.5.3 18 18 0 004.7-.6A18.2 18.2 0 013.5 25.4v-.2a17.9 17.9 0 008.2 2.3A18 18 0 016.1 3.3a51.2 51.2 0 0037.3 19A18.6 18.6 0 0143 18 18 18 0 0174.3 5.7a36.2 36.2 0 0011.5-4.4 18 18 0 01-8 10 37.8 37.8 0 0010.4-2.8 36.1 36.1 0 01-9 9.4z' data-name='Layer 1'/%3E%3C/g%3E%3C/svg%3E%0A"
									/>
								</Link>
							</Flex>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
