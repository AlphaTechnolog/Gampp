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
gampp show-themes # This show the available themes, route: ~/Code/gampp/themes/*
gampp use-theme lux # Please wait, the first time, this use a long time because it is compiling...
'
```

Now go to your browser and use http://localhost:8000/, if you change the port with:

```sh
cd ~
echo 'APP_PORT=3000' > gampp.conf
```

Update the gampp.conf.js in the theme, using:

```sh
cd ~/Code/gampp/themes/lux/src/gampp
echo '{
  port: 3000,
  hostname: "localhost",
}' > ./gampp.conf.js
```

## Creating your own theme

Important the theme must be in `~/Code/gampp/themes/your_theme_name`.

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
gampp use-theme my_theme # This use a long time first time, please wait because it is compiling...
gampp used-theme
# -- Output --
# [I]: The used theme is "my_theme"!
```

Go to `http://localhost:8000`. And enjoy with your new custom theme!
