import React from 'react'
import { GamppTheme } from './gampp/gampp.templater'

import SimplexTitle from './components/Simplex.Title'
import SimplexContent from './components/Simplex.Content'
import SimplexContentUpDir from './components/Simplex.Content.UpDir'
import SimplexContentLoader from './components/Simplex.Content.Loader'
import SimplexFooter from './components/Simplex.Footer'

function App() {
  return (
    <>
      <GamppTheme
        Title={SimplexTitle}
        Content={SimplexContent}
        ContentUpDir={SimplexContentUpDir}
        ContentLoader={SimplexContentLoader}
        Footer={SimplexFooter}
      />
    </>
  )
}

export default App