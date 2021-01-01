import subprocess
from sys import argv
from os.path import isdir as is_dir
from pyutils import RED, BLUE

argv = argv[1:]
rootdir = argv[0]
rootdir = rootdir.rstrip()
theme_name = argv[1]

def error(msg):
    print(f'{RED}[E]: {msg}')
    exit(0)

if not is_dir(f'{rootdir}/themes/{theme_name}'):
    error(f'Invalid theme name "{theme_name}"')

class ThemeSwitcher:
    def __init__(self, name):
        self.name = name
        self.switch()

    def switch(self):
        subprocess.run(
            [f'cd /servers; sudo rm -rf ./static ./asset-manifest.json ./index.html ./precache* ./service-worker.js'],
            stdout = subprocess.PIPE,
            shell = True
        )
        subprocess.run(
            [f'cd {rootdir}/themes/{self.name}; npm run build; cd build; sudo cp -r ./* /servers'],
            stdout = subprocess.PIPE,
            shell = True
        )

if not is_dir(f'{rootdir}/themes/{theme_name}/build'):
    ThemeSwitcher(theme_name)
else:
    subprocess.run(
        [f'cd /servers; sudo rm -rf ./static ./asset-manifest.json ./index.html ./precache* ./service-worker.js'],
        stdout = subprocess.PIPE,
        shell = True
    )

    subprocess.run(
        [f'cd {rootdir}/themes/{theme_name}; cd build; sudo cp -r ./* /servers'],
        stdout = subprocess.PIPE,
        shell = True
    )

subprocess.run(
    [f'cd /servers; touch .used.txt; echo "{theme_name}" > .used.txt'],
    stdout = subprocess.PIPE,
    shell = True
)

print(f'{BLUE}[I]: Switched to theme "{theme_name}"!')
