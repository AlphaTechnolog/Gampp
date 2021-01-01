import React from 'react'
import { GamppTheme } from './gampp/gampp.templater'

import LuxTitle from './components/Lux.Title'
import LuxContent from './components/Lux.Content'
import LuxContentUpDir from './components/Lux.Content.UpDir'
import LuxContentLoader from './components/Lux.Content.Loader'
import LuxFooter from './components/Lux.Footer'

function App() {
    return (
        <GamppTheme
            Title={LuxTitle}
            Content={LuxContent}
            ContentUpDir={LuxContentUpDir}
            ContentLoader={LuxContentLoader}
            Footer={LuxFooter}
        />
    )
}

export default App
