from os.path import isdir as is_dir

if not is_dir('/servers'):
    print('False-/servers')
elif not is_dir('/servers/logs'):
    print('False-/servers/logs')
else:
    print('True-')