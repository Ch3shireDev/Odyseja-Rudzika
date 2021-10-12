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


def run(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    process.wait()
    return process.returncode


def ssh_exec(cmd):
    print(cmd)
    ssh.exec_command(cmd)
    print('success!')


print("building project...")
run('ionic build --prod')
print("build complete")
run('zip -r robin.zip ./www')
print("zip complete")

data = json.load(open('password.json'))

server, port, user, password = data['server'], data['port'], data['user'], data['password']

ssh = createSSHClient(server, port, user, password)
scp = SCPClient(ssh.get_transport())
scp.put('robin.zip', '~/robin.zip')

ssh_exec('unzip robin.zip')
ssh_exec('rm -rf public_html/www')
ssh_exec('mv www ./public_html')
ssh_exec('find public_html -type f -exec chmod 0644 {} \;')
ssh_exec('find public_html -type d -exec chmod 0755 {} \;')
ssh_exec('rm -rf public_html/robin_old')
ssh_exec('mv public_html/robin public_html/robin_old')
ssh_exec('mv public_html/www public_html/robin')
