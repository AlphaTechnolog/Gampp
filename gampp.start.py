import subprocess
import sys
from enviroment_python import enviroment
from pyutils import RED

class Starter:
    def __init__(self):
        self._start_gampp()

    @staticmethod
    def get_argv():
        argv = sys.argv[1:]
        return argv

    def show_log(self):
        print(f'{RED}[E]: Port {enviroment["port"]}, is used')

    def _start_gampp(self):
        rootdir = self.get_argv()[0]
        rootdir = rootdir.rstrip()
        self.show_log()
        executer = subprocess.run([f'cd {rootdir}; npm start > /servers/logs/start'], stdout = subprocess.PIPE, shell = True)
        stdout = executer.stdout.decode('utf-8')
        stdout = stdout.rstrip()

Starter()