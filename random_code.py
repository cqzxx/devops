import re
import secrets
import string


"""
随机文章名称
使用4位随机数字组成，名称全局唯一
"""


def get_current_codes():
    config_file = '.vitepress/config.mjs'
    with open(config_file) as f:
        data = f.read()

    codes = re.findall(r"\{ text: '.*?', link: '/.*?/(\d{4})' \}", data)
    return codes


def random_code():
    return ''.join(secrets.choice(string.digits) for i in range(4))


def new_code():
    codes = get_current_codes()
    while True:
        code = random_code()
        if code not in codes:
            print(code)
            break


new_code()
