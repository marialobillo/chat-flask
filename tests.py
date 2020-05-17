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
        self.user_path = 'http://127.0.0.1:5000/api/users'
        self.channel_path = 'http://127.0.0.1:5000/api/channels'
        self.message_path = 'http://127.0.0.1:5000/api/messages'

    def tearDown(self):
        with self.app.app_context():
            db.drop_all()

    def test_one_equals_one(self):
        self.assertEqual(1, 1)

    # tests for users
    def test_get_all_users(self):
        response = self.client.get(path = self.user_path)
        self.assertEqual(response.status_code, 200)


    # tests for channels
    def test_get_all_channels(self):
        response = self.client.get(path = self.channel_path)
        self.assertEqual(response.status_code, 200)


    # tests for messages 
    def test_get_all_messages(self):
        response = self.client.get(path = self.message_path)
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()