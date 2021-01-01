import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { GamppTitle } from '../gampp/gampp.templater'

function DarklyTitleTemplate({ text }) {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
                {text}
            </Navbar.Brand>
        </Navbar>
    )
}

export default function DarklyTitle() {
    return (
        <GamppTitle
            Component={DarklyTitleTemplate}
        />
    )
}
