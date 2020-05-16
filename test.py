import unittest

from config import config
from app import create_app 


class TestAPI(unittest.TestCase):
    def setUp(self):
        environment = config['test']
        self.app = create_app(environment) 

    def tearDown(self):
        pass