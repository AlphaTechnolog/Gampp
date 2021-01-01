import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

function DarklyContentLoader() {
    return (
        <Container className='text-center mx-auto'>
            <h5>Loading...</h5>
            <Spinner
                animation='border'
                variant='primary'
                className='mx-auto'
            >
                <span className='sr-only'>
                    load spinner
                </span>
            </Spinner>
        </Container>
    )
}

export default DarklyContentLoader
