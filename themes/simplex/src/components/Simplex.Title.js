import React from 'react'
import { GamppTitle } from '../gampp/gampp.templater'

function SimplexTitleTemplate({ text }) {
  return (
    <h1>{text}</h1>
  )
}

function SimplexTitle() {
  return (
    <GamppTitle Component={SimplexTitleTemplate} />
  )
}

export default SimplexTitle