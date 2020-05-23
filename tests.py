import unittest
import json

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

    def test_get_first_user(self):
        new_path = self.user_path + '/1'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.data.decode('utf-8'))
        user_id = data['data']['id']
        self.assertEqual(user_id, 1)

    def test_user_not_found(self):
        new_path = self.user_path + '/100'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 404)

    def test_create_user(self):
        data = {
            'username': 'Jane', 'password': '123456', 'created_at': 'Sun, 05 Apr 2020 12:00:00 GMT'
        }

        response = self.client.post(path=self.user_path, data=json.dumps(data), 
                content_type=self.content_type)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        user = data['data']
        self.assertEqual(user['id'], 3)

    def test_update_user(self):
        updated_data = {'password': 'pass123'}

        new_path = self.user_path + '/1'
        response = self.client.put(path=new_path, data=json.dumps(updated_data),
                    content_type=self.content_type)

        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        password = data['data']['password']
        self.assertEqual(password, updated_data['password'])

    def test_delete_user(self):
        new_path = self.user_path + '/1'

        response = self.client.get(path=new_path,
                                    content_type=self.content_type)
        self.assertEqual(response.status_code, 200)

        response = self.client.delete(path=new_path,
                                        content_type=self.content_type)
        self.assertEqual(response.status_code, 400)
        



    # tests for channels
    def test_get_all_channels(self):
        response = self.client.get(path = self.channel_path)
        self.assertEqual(response.status_code, 200)

    def test_get_first_channel(self):
        new_path = self.channel_path + '/1'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.data.decode('utf-8'))
        channel_id = data['data']['id']
        self.assertEqual(channel_id, 1)

    def test_channel_not_found(self):
        new_path = self.channel_path + '/100'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 404)

    def test_create_channel(self):
        data = {
            'name': 'PHP', 'description': 'A PHP channel', 'created_at': 'Mon, 18 May 2020 11:00:00 GMT'
        }

        response = self.client.post(path=self.channel_path, data=json.dumps(data), 
                content_type=self.content_type)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        channel = data['data']
        self.assertEqual(channel['id'], 3)

    def test_update_channel(self):
        updated_data = {'name': 'AWS'}

        new_path = self.channel_path + '/1'
        response = self.client.put(path=new_path, data=json.dumps(updated_data),
                    content_type=self.content_type)

        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        name = data['data']['name']
        self.assertEqual(name, updated_data['name'])

    def test_delete_channel(self):
        new_path = self.channel_path + '/1'

        response = self.client.get(path=new_path,
                                    content_type=self.content_type)
        self.assertEqual(response.status_code, 200)

        response = self.client.delete(path=new_path,
                                        content_type=self.content_type)
        self.assertEqual(response.status_code, 400)



    # tests for messages 
    def test_get_all_messages(self):
        response = self.client.get(path = self.message_path)
        self.assertEqual(response.status_code, 200)

    def test_get_first_message(self):
        new_path = self.message_path + '/1'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.data.decode('utf-8'))
        message_id = data['data']['id']
        self.assertEqual(message_id, 1)

    def test_message_not_found(self):
        new_path = self.message_path + '/100'
        response = self.client.get(path = new_path, content_type = self.content_type)
        self.assertEqual(response.status_code, 404)


    def test_create_message(self):
        data = {
            'user_id': 1, 'channel_id': 1, 'content': 'Another message', 'created_at': 'Mon, 18 May 2020 11:00:00 GMT'
        }

        response = self.client.post(path=self.message_path, data=json.dumps(data), 
                content_type=self.content_type)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        message = data['data']
        self.assertEqual(message['id'], 3)


    def test_update_message(self):
        updated_data = {'content': 'This is a new message'}

        new_path = self.message_path + '/1'
        response = self.client.put(path=new_path, data=json.dumps(updated_data),
                    content_type=self.content_type)

        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        content = data['data']['content']
        self.assertEqual(content, updated_data['content'])


if __name__ == '__main__':
    unittest.main()