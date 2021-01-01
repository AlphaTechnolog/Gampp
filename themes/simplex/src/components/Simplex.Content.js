import React from 'react'
import { GamppContentExplorer } from '../gampp/gampp.templater'

function SimplexContentFolder({ name, props }) {
  return (
    <>
      <p {...props} style={{ cursor: 'pointer' }}>
        DIR: {name}
      </p>
    </>
  )
}

function SimplexContentFile({ name, props }) {
  return (
    <>
      <p {...props} style={{ cursor: 'pointer' }}>
        FILE: {name}
      </p>
    </>
  )
}

function SimplexContent() {
  return (
    <GamppContentExplorer
      Folder={SimplexContentFolder}
      File={SimplexContentFile}
    />
  )
}

export default SimplexContent