import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { GamppTitle } from '../gampp/gampp.templater'

function LuxTitleTemplate({ text }) {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
                {text}
            </Navbar.Brand>
        </Navbar>
    )
}

export default function LuxTitle() {
    return (
        <GamppTitle
            Component={LuxTitleTemplate}
        />
    )
}
