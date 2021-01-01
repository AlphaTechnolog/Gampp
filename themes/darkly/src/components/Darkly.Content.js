import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GamppContentExplorer } from '../gampp/gampp.templater'
import { Folder, File } from 'react-bootstrap-icons'

function ContentFolder({ name, props }) {
    return (
        <Col className='text-center' sm='4' md='3'>
            <Row {...props} style={{ cursor: 'pointer' }}>
                <Col className='text-center' sm='12'>
                    <Folder size='40' />
                </Col>
                <Col sm='12'>
                    <p className='text-center'>
                        {name}
                    </p>
                </Col>
            </Row>
        </Col>
    )
}

function ContentFile({ name, props }) {
    return (
        <Col className='text-center' sm='4' md='3'>
            <Row {...props} style={{ cursor: 'pointer' }}>
                <Col className='text-center' sm='12'>
                    <File style={{ fontSize: 40 }} />
                </Col>
                <Col sm='12'>
                    <p className='text-center' style={{ cursor: 'pointer' }}>
                        {name}
                    </p>
                </Col>
            </Row>
        </Col>
    )
}

function DarklyContent() {
    return (
        <Container className='mt-5 mb-4'>
            <Row>
                <GamppContentExplorer
                    Folder={ContentFolder}
                    File={ContentFile}
                />
            </Row>
        </Container>
    )
}

export default DarklyContent
