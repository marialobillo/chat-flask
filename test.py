import unittest

from app import create_app 
from app import db

from config import config

class TestAPI(unittest.TestCase):
    def setUp(self):
        environment = config['test']
        self.app = create_app(environment) 
        self.client = self.app.test_client()

        self.content_type = 'application/json'

    def tearDown(self):
        with self.app.app_context():
            db.drop_all()

    def test_one_equals_one(self):
        self.assertEqual(1, 1)

if __name__ == '__main__':
    unittest.main()