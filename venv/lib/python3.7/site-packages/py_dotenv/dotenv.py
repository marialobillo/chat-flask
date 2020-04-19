# Based on
# https://github.com/theskumar/python-dotenv/blob/master/dotenv/main.py
import os
from collections import OrderedDict


def read_dotenv(file_path):
    if not os.path.isfile(file_path):
        raise FileNotFoundError(
            'Not loading {} - it doesn\'t exists'.format(file_path)
        )

    values = OrderedDict(parse_dotenv(file_path))
    for k, v in values.items():
        os.environ[k] = v


def parse_dotenv(file_path):
    with open(file_path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue

            k, v = line.split('=', 1)
            k, v = k.strip(), v.strip()

            yield k, v
