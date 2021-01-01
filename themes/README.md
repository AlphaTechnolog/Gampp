# GAMPP Themes documentation.

In now date the themes creations are only available for React.js. If this app
get more views and more issues and more feed... I work in a libraries for Vue.js
and Angular 2.

## Requirements

- Node.js
- React.js
- Gampp

## Using the precreated themes

Use:

```sh
gampp start
# Open other terminal and use
cd ~/Code/gampp/themes/lux # Lux or darkly
echo '
export default {
  port: 8000,
  hostname: 'localhost',
}' > ./src/gampp/gampp.conf
npm start
'
```
## Creating your own theme

`src/index.js`

```javascript
import React from 'react'
import { render } from 'react-dom'
import 'bootswatch/dist/lux/bootstrap.min.css'
import App from './App'

const location = document.getElementById('root');

render(
  <App />,
  location,
);
```

`src/App.js`

```javascript
import React from 'react'
import {
  GamppTheme,
  GamppTitle,
  GamppContentUpDir,
  GamppContentExplorer,
  GamppContentLoader,
} from './gampp/gampp.templater'

// ---- Title -----

function ThemeTitleTemplate({ text }) {
  return (
    <h1>{text}</h1>
  )
}

function ThemeTitle() {
  return (
    <GamppTitle Component={ThemeTitleTemplate} />
  )
}

// ---- Content ----

function ThemeContentFolder({ name, props }) {
  return (
    <p {...props}>DIR: {name}</p>
  )
}

function ThemeContentFile({ name, props }) {
  return (
    <p {...props}>FILE: {name}</p>
  )
}

function ThemeContent() {
  return (
    <GamppContentExplorer
      Folder={ThemeContentFolder}
      File={ThemeContentFile}
    />
  )
}

// ---- Content UpDir ----

function ThemeContentUpDirTemplate({ props }) {
  return (
    <p {...props}>
      ..
    </p>
  )
}

function ThemeUpDir() {
  return (
    <GamppContentUpDir Component={ThemeContentUpDirTemplate} />
  )
}

// ---- Content loader ----

function ThemeLoader() {
  return (
    <p>Loading...</p>
  )
}

// ---- Content Footer ----

function ThemeFooter({ platform, version }) {
  return (
    <footer>
      <p>
        GAMPP on `{platform}` - `{version}`
      </p>
    </footer>
  )
}

// ---- App ----

function App() {
  return (
    <GamppTheme
      Title={ThemeTitle}
      Content={ThemeContent}
      ContentUpDir={ThemeUpDir}
      ContentLoader={ThemeLoader}
      Footer={ThemeFooter}
    />
  )
}
```

Now use:

```sh
cd ~/Code/gampp/themes/my_custom_theme
npm start
```

And enjoy with your new custom theme!
