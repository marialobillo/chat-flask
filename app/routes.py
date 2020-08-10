import jwt
from flask import request
from flask import Blueprint
from config import config

from .responses import response
from .responses import not_found
from .responses import bad_request
from .responses import auth_response

from .models import db
from .models.user import User
from .models.channel import Channel
from .models.message import Message


api_v1 = Blueprint('api', __name__, url_prefix='/api')
environment = config['development']


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

# auth response  for login
@api_v1.route('/login', methods=['POST'])
def get_login():
    json = request.get_json(force = True)

    if json.get('username') is None:
        return bad_request()
    if json.get('password') is None:
        return bad_request()

    user = User.query.filter_by(username=json.get('username'), password=json.get('password')).first()

    if user is None:
        return not_found()

    token = jwt.encode({'id': user.id}, 
                            environment.SECRET_WORD, 
                            algorithm='HS256')

    return auth_response(user.serialize(), token.decode('utf-8')) 

# auth response for registration
@api_v1.route('/users', methods=['POST'])
def create_user():
    json = request.get_json(force = True)
    
    if json.get('username') is None:
        return bad_request()

    if json.get('password') is None:
        return bad_request()

    user = User.query.filter_by(username=json.get('username')).first()
    if user is not None:
        return bad_request()

    user = User.new(json['username'], json['password'])

    if user.save():
        token = jwt.encode({'id': user.id}, 
                            environment.SECRET_WORD, 
                            algorithm='HS256')
        return auth_response(user.serialize(), token.decode('utf-8'))
        
    return bad_request()

@api_v1.route('/token', methods=['POST'])
def get_user_by_token():
    json = request.get_json(force = True)

    if json.get('auth_token') is None:
        return bad_request()

    user_data = jwt.decode(json.get('auth_token'), 
                    environment.SECRET_WORD, 
                    algorithms='HS256')

    id = user_data['id']

    auth_user = User.query.filter_by(id=id).first()

    if auth_user is None:
        return not_found()

    return auth_response(auth_user.serialize(), json.get('auth_token'))


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
def delete_user(id):
    user = User.query.filter_by(id=id).first()

    if user is None:
        return not_found()

    if user.delete():
        return response(user.serialize())
    return bad_request()


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

    channel = Channel.new(json['name'])

    if channel.save():
        return response(channel.serialize())

    return bad_request() 


@api_v1.route('/channels/<id>', methods=['PUT'])
def update_channel(id):
    channel = Channel.query.filter_by(id=id).first()
    if channel is None:
        return not_found()

    json = request.get_json(force=True)

    channel.name = json.get('name', channel.name)
    channel.description = json.get('description', channel.description)
    channel.created_at = json.get('created_at', channel.created_at)

    if channel.save():
        return response(channel.serialize())
    return bad_request()

@api_v1.route('/channels/<id>', methods=['DELETE'])
def delete_channel(id):
    channel = Channel.query.filter_by(id=id).first()

    if channel is None:
        return not_found()

    if channel.delete():
        return response(channel.serialize())
    return bad_request()

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

@api_v1.route('/bychannel/<channel_id>', methods=['GET'])
def get_messages_by_channel(channel_id):
    messages = db.session.query(*User.__table__.columns + Message.__table__.columns).select_from(
        User).join(
        Message, User.id == Message.user_id).filter(
        Message.channel_id == channel_id
        ).order_by(Message.created_at).with_entities(
        User.username, Message.content, Message.created_at, Message.channel_id, Message.user_id
        ).all()
    
    if messages is None:
        return not_found()

    return response([Message.to_serialize(message) for message in messages])

@api_v1.route('/messages', methods=['POST'])
def create_message():
    json = request.get_json(force = True)
    
    if json.get('user_id') is None:
        return bad_request()

    if json.get('channel_id') is None:
        return bad_request()

    if json.get('content') is None:
        return bad_request()

    message = Message.new(json['user_id'], json['channel_id'], json['content'])
    user = User.query.filter_by(id=json['user_id']).first() 
    username = user.username

    if message.save():
        return response(message.serialize(username))

    return bad_request()

@api_v1.route('/messages/<id>', methods=['PUT'])
def update_message(id):
    message = Message.query.filter_by(id=id).first()

    if message is None:
        return not_found()

    json = request.get_json(force=True)
    message.user_id = json.get('user_id', message.user_id)
    message.channel_id = json.get('channel_id', message.channel_id)
    message.content = json.get('content', message.content)
    message.created_at = json.get('created_at', message.created_at)

    if message.save():
        return response(message.serialize())

    return bad_request()

@api_v1.route('/messages/<id>', methods=['DELETE'])
def delete_message(id):
    message = Message.query.filter_by(id=id).first()

    if message is None:
        return not_found()

    if message.delete():
        return response(message.serialize())
    return bad_request()