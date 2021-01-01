import re

class FakeHandle:
    def read(self):
        return 'APP_PORT=8000'

class Enviroment:
    def _get_handle(self):
        try:
            handle = open('./gampp.conf')
        except:
            handle = FakeHandle()

        return handle

    def _get_port_with_handle(self, handle):
        content = handle.read()
        port = re.findall(r'APP_PORT=(.*)', content)
        port = port[0]
        return port

    def _calc_enviroment(self):
        handle = self._get_handle()
        port = self._get_port_with_handle(handle)
        return { 'port': port }

    def get_enviroment(self):
        return self._calc_enviroment()

enviroment = Enviroment().get_enviroment()