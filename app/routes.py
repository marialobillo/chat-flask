from flask import request
from flask import Blueprint

from .responses import response
from .responses import not_found
from .responses import bad_request

from .models.user import User
from .models.channel import Channel
from .models.message import Message

api_v1 = Blueprint('api', __name__, url_prefix='/api')

# endpoints for users
@api_v1.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return response([user.serialize() for user in users])

@api_v1.route('/users/<id>', methods=['GET'])
def get_user(id):
    user = User.query.filter_by(id=id).first()
    if user is None:
        return not_found()
    return response(user.serialize())

@api_v1.route('/users', methods=['POST'])
def create_user():
    json = request.get_json(force = True)
    
    if json.get('username') is None:
        return bad_request()

    if json.get('password') is None:
        return bad_request()

    if json.get('created_at') is None:
        return bad_request()

    user = User.new(json['username'], json['password'], json['created_at'])

    if user.save():
        return response(user.serialize())

    return bad_request()


@api_v1.route('/users/<id>', methods=['PUT'])
def update_user(id):
    user = User.query.filter_by(id=id).first()

    if user is None:
        return not_found()
    json = request.get_json(force=True)
    user.username = json.get('username', user.username)
    user.password = json.get('password', user.password)
    user.created_at = json.get('created_at', user.created_at)

    if user.save():
        return response(user.serialize())

    return bad_request()
@api_v1.route('/users/<id>', methods=['DELETE'])
def delete_user():
    pass

# endpoints for channels
@api_v1.route('/channels', methods=['GET'])
def get_channels():
    channels = Channel.query.all()
    return response([channel.serialize() for channel in channels]) 

@api_v1.route('/channels/<id>', methods=['GET'])
def get_channel(id):
    channel = Channel.query.filter_by(id=id).first()
    if channel is None:
        return not_found()
    return response(channel.serialize())

@api_v1.route('/channels', methods=['POST'])
def create_channel():
    json = request.get_json(force = True)
    
    if json.get('name') is None:
        return bad_request()

    if json.get('description') is None:
        return bad_request()

    if json.get('created_at') is None:
        return bad_request()

    channel = Channel.new(json['name'], json['description'], json['created_at'])

    if channel.save():
        return response(channel.serialize())

    return bad_request() 

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
    return response([message.serialize() for message in messages]) 

@api_v1.route('/messages/<id>', methods=['GET'])
def get_message(id):
    message = Message.query.filter_by(id=id).first()
    if message is None:
        return not_found()
    return response(message.serialize())

@api_v1.route('/messages', methods=['POST'])
def create_message():
    json = request.get_json(force = True)
    
    if json.get('user_id') is None:
        return bad_request()

    if json.get('channel_id') is None:
        return bad_request()

    if json.get('content') is None:
        return bad_request()

    if json.get('created_at') is None:
        return bad_request()

    message = Message.new(json['user_id'], json['channel_id'], json['content'], json['created_at'])

    if message.save():
        return response(message.serialize())

    return bad_request()

@api_v1.route('/messages/<id>', methods=['PUT'])
def update_message():
    pass 

@api_v1.route('/messages/<id>', methods=['DELETE'])
def delete_message():
    pass