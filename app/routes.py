from flask import Blueprint
from .responses import response

from .models.user import User
from .models.channel import Channel
from .models.message import Message

api_v1 = Blueprint('api', __name__, url_prefix='/api')

# endpoints for users
@api_v1.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return response(users)

@api_v1.route('/users/<id>', methods=['GET'])
def get_user():
    pass

@api_v1.route('/users', methods=['POST'])
def create_user():
    pass 

@api_v1.route('/users/<id>', methods=['PUT'])
def update_user():
    pass 

@api_v1.route('/users/<id>', methods=['DELETE'])
def delete_user():
    pass

# endpoints for channels
@api_v1.route('/channels', methods=['GET'])
def get_channels():
    channels = Channel.query.all()
    return response(channels) 

@api_v1.route('/channels/<id>', methods=['GET'])
def get_channel():
    pass

@api_v1.route('/channels', methods=['POST'])
def create_channel():
    pass 

@api_v1.route('/channels/<id>', methods=['PUT'])
def update_channel():
    pass 

@api_v1.route('/channels/<id>', methods=['DELETE'])
def delete_channel():
    pass

# endpoints for messages
@api_v1.route('/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return response(messages) 

@api_v1.route('/messages/<id>', methods=['GET'])
def get_message():
    pass

@api_v1.route('/messages', methods=['POST'])
def create_message():
    pass 

@api_v1.route('/messages/<id>', methods=['PUT'])
def update_message():
    pass 

@api_v1.route('/messages/<id>', methods=['DELETE'])
def delete_message():
    pass