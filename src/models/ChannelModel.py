from marshmallow import fields, Schema 
import datetime 
from .import db
from .MessageModel import MessageSchema 

class ChannelModel(db.Model):
    __tablename__ = 'channels'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime)
    modified_at = db.Column(db.DateTime)
    # Relationshipt
    messages = db.relathionship('MessageModel', backref='channels', lazy=True)

    def __init__(self, data):
        self.name = data.get('name')
        self.description = data.get('description')
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
    def get_all_channels():
        return ChannelModel.query.all() 

    @staticmethod 
    def get_one_channel(id):
        return ChannelModel.query.get(id)

    def __repr(self):
        return '<id {}>'.format(self.id)

class ChannelSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    created_at = fields.DateTime(dump_only=True)
    modified_at = fields.DateTime(dump_only=True)
    messages = fields.Nested(MessageSchema, many=True)
