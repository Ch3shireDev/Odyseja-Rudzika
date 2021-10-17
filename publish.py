import subprocess
import paramiko
from scp import SCPClient
import json


def createSSHClient(server, port, user, password):
    client = paramiko.SSHClient()
    client.load_system_host_keys()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(server, port, user, password)
    return client


def ssh_exec(cmd):
    print(cmd)
    ssh.exec_command(cmd)
    print('success!')


data = json.load(open('password.json'))

server, port, user, password = data['server'], data['port'], data['user'], data['password']

ssh = createSSHClient(server, port, user, password)
scp = SCPClient(ssh.get_transport())
scp.put('robin.zip', '~/robin.zip')

# ssh_exec('./script.sh')
