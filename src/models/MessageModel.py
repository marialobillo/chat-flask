from marshmallow import fields, Schema
from . import db 
import datetime 

class MessageModel(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime)
    modified_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'), nullable=False)

    def __init__(self, data):
        self.content = data.get('content')
        self.user_id = data.get('user_id')
        self.channel_id = data.get('channel_id')
        self.created_at = datetime.datetime.utcnow()
        self.modified_at = datetime.datetime.utcnow()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)
        self.modified_at = datetime.datetime.utcnow()
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all_messages():
        return MessageModel.query.all()

    @staticmethod
    def get_one_message(id):
        return MessageModel.query.get(id)

    def __repr__(self):
        retur '<id {}>'.format(self.id)


class MessageSchema(Schema):
    
    id = fields.Int(dump_only=True)
    content = fields.Str(required=True)
    user_id = fields.Int(required=True)
    channel_id = fields.Int(required=True)
    created_at = fields.DateTime(dump_only=True)
    modified_at = fields.DateTime(dump_only=True)
