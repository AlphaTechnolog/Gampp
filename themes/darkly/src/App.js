import React from 'react'
import { GamppTheme } from './gampp/gampp.templater'

import DarklyTitle from './components/Darkly.Title'
import DarklyContent from './components/Darkly.Content'
import DarklyContentUpDir from './components/Darkly.Content.UpDir'
import DarklyContentLoader from './components/Darkly.Content.Loader'
import DarklyFooter from './components/Darkly.Footer'

function App() {
    return (
        <GamppTheme
            Title={DarklyTitle}
            Content={DarklyContent}
            ContentUpDir={DarklyContentUpDir}
            ContentLoader={DarklyContentLoader}
            Footer={DarklyFooter}
        />
    )
}

export default App
