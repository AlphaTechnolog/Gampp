from sys import argv
from os import scandir
from os.path import isdir as is_dir
from pyutils import RED, BLUE, GREEN

argv = argv[1:]
rootdir = argv[0]
rootdir = rootdir.rstrip()

def error(msg):
    print(f'{RED}[E]: {msg}')
    exit(1)

if not is_dir(f'{rootdir}/themes'):
    error(f'Invalid themes directory, please create the dir {rootdir}/themes')

print(f'{BLUE}[I]: Available themes')

for d in scandir(f'{rootdir}/themes'):
    if d.is_dir():
        print(f'{BLUE}  ->{GREEN} {d.name}')
