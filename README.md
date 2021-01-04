# GAMPP

The name is based in LAMPP, but the funcionality is based in APACHE.
In this your applications are not writed in php and it tecnologies,
in this your applications are writed in node.js and related frameworks.

## Requirements

- Linux.
- Node.js.
- Python (in your path as `python3`)
- GNU Bash

## Installation

Copy all code to specific folder, and update your $PATH adding it
address to your SHELLrc, example:

**For bash**

```sh
git clone ... # Clone this repo
cp -r ./gampp ~/Code
cd ~
nvim .bashrc # Use your code editor, nvim, nano, code, etc

# Editing...

# ...
export PATH=/home/USER/Code/gampp:$PATH
# ...
```

**For fish**

```sh
cp -r ./gampp ~/Code
cd ~/.config/fish
nvim config.fish # Use your code editor, nvim, nano, code, etc

# Editing...

# ...
set PATH /home/USER/Code/gampp:$PATH
# ...
```
**For zsh**

```sh
cp -r ./gampp ~/Code
cd ~
nvim .zshrc # Use your code editor, nvim, nano, code, etc

# Editing...

# ...
PATH=/home/USER/Code/gampp:$PATH
# ...
```
## Use

To start gampp use:

```sh
gampp start
# -- Output --
# [I]: Creating folder /servers
# [sudo] password for USER: # Writing...
# [I]: Creating folder /servers/logs
# [S]: Gampp is listening at port 8000
```

**Note**: Please write your password to `gampp`, it create a folder named `/servers` and folder
named `/servers/logs` but it action require root password, because the folder is in `/`.

## Discovering gampp functions.

In gampp you must to create a themes for directories explorer, change the port media config,
file and host apps in your local machine, first we are using the default directories explorer
to navigate in the files.

First create a folder in `/servers` named `test_app` and create your first `Hello, World!`.

```sh
sudo mkdir -p /servers/test_app
echo '<h1>Hello, World!</h1>' > ./tmp
sudo mv ./tmp /servers/test_app/index.html
```

Now open your browser and go to url `http://localhost:8000/test_app`
The result is a tipic `Hello, World!` message.

Now we are using the dir explorer... Go to `http://localhost:8080`, in it you must to navigate to
the child folders, to create your own theme and use precreated see [Themes documentation.](./themes/README.md)

## The config file

The config file is named `gampp.conf` in the actual pwd. Please execute the next commands:

```sh
cd ~
touch gampp.conf
echo 'APP_PORT=5000' > gampp.conf # In the APP_PORT=5000, you must change 5000 to the port
gampp start
# --- Output ----
# [S]: Gampp is listening at port 5000
```