import React from 'react'
import { GamppContentUpDir } from '../gampp/gampp.templater'

function SimplexContentUpDirTemplate({ props }) {
  return (
    <>
      <p {...props} style={{ cursor: 'pointer' }}>
        DIR ..
      </p>
    </>
  )
}

function SimplexContentUpDir() {
  return (
    <GamppContentUpDir Component={SimplexContentUpDirTemplate} />
  )
}

export default SimplexContentUpDir