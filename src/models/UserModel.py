from marshmallow import fields, Schema 
import datatime 
from .import db

class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=True)
    created_at = db.Column(db.DateTime)
    modified_at = db.Column(db.DateTime)

    def __init__(self, data):
        self.username = data.get('username')
        self.email = data.get('email')
        self.password = data.get('password')
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
    def get_all_users():
        return UserModel.query.all()

    @staticmethod 
    def get_one_user(id):
        return UserModel.query.get(id)

    def __repr(self):
        return '<id {}>'.format(self.id)