import subprocess
from os.path import isfile as is_file
from sys import argv
from pyutils import RED, BLUE

argv = argv[1:]
rootdir = argv[0]
rootdir = rootdir.rstrip()

def error(msg):
    print(f'{RED}[E]: {msg}')
    exit(0)

def info(msg):
    print(f'{BLUE}[I]: {msg}')

if not is_file('/servers/.used.txt'):
    error('No theme used')

subprocess.run(
    ['cd /servers; sudo rm -rf ./static ./asset-manifest.json ./index.html ./precache* ./service-worker.js'],
    stdout = subprocess.PIPE,
    shell = True
)

executer = subprocess.run(
    ['cd /servers; cat .used.txt'],
    stdout = subprocess.PIPE,
    shell = True
)

stdout = executer.stdout.decode('utf-8')
stdout = stdout.rstrip()

subprocess.run(
    [f'cd /servers; sudo rm ./.used.txt'],
    stdout = subprocess.PIPE,
    shell = True
)

info(f'Quited theme: "{stdout}"')