import subprocess
from os.path import isfile as is_file
from sys import argv
from pyutils import BLUE

argv = argv[1:]
rootdir = argv[0]
rootdir = rootdir.rstrip()

def cinfo(msg):
    print(f'{BLUE}[I]: {msg}')
    exit(0)

if not is_file('/servers/.used.txt'):
    cinfo('No theme used!')

executer = subprocess.run(
    [f'cd /servers; cat .used.txt'],
    shell = True,
    stdout = subprocess.PIPE,
)

stdout = executer.stdout.decode('utf-8')
stdout = stdout.rstrip()

print(f'{BLUE}[I]: The selected theme is {stdout}')
