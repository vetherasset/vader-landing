import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../themes/vader'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Gate = ({ Component, pageProps }) => {

	Gate.propTypes = {
		Component: PropTypes.any,
		pageProps: PropTypes.any,
	}

	return (
		<ChakraProvider theme={theme}>
			<Header/>
			<Component {...pageProps} />
			<hr style={{ width: '100%', maxWidth: '60rem', height: '1px', margin: '0 auto', borderColor: '#d874c0', opacity: '0.5' }}/>
			<Footer/>
		</ChakraProvider>
	)
}

export default Gate