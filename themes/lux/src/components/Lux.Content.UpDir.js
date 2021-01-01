import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Folder } from 'react-bootstrap-icons'
import { GamppContentUpDir } from '../gampp/gampp.templater'

function LuxContentUpDirTemplate({ props }) {
    return (
        <Col className='text-center' sm='12'>
            <Row {...props} style={{ cursor: 'pointer' }}>
                <Col className='text-center' sm='12'>
                    <Folder size='40' />
                </Col>
                <Col sm='12'>
                    <p className='text-center'>
                        ..
                    </p>
                </Col>
            </Row>
        </Col>
    )
}

function LuxContentUpDir() {
    return (
        <Container className='mt-5 mb-4'>
            <Row>
                <GamppContentUpDir
                    Component={LuxContentUpDirTemplate}
                />
            </Row>
        </Container>
    )
}

export default LuxContentUpDir
