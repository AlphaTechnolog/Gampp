import React from 'react'

function SimplexFooter({ platform, version }) {
  return (
    <footer>
      <hr />
      <p>GAMPP in {platform} {version}</p>
    </footer>
  )
}

export default SimplexFooter