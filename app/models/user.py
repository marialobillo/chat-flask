from . import db 
from sqlalchemy.event import listen
import jwt 
import json
from config import config

environment = config['development']


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())
    
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username, 
            "password": self.password,
            "created_at": self.created_at
        }

    def auth_serialize(self):
        token = jwt.encode({'id': self.id}, 
                            environment.SECRET_WORD, 
                            algorithm='HS256')
        return {
            "id": self.id,
            "username": self.username, 
            "password": self.password,
            "created_at": self.created_at,
            "token": token.decode('utf-8')
        }

    @classmethod
    def new(cls, username, password):
        return User(username=username, password=password)

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
            return True
        except:
            return False

    def delete(self):
        try: 
            db.session.delete(self)
            db.session.commit()
            return True 
        except:
            return False

    def __str__(self):
        return self.username



def insert_users(*args, **kwargs):
    db.session.add(
        User(username='Mery', password='root123', created_at='2020-04-05 12:00:00')
    )
    db.session.add(
        User(username='Jon', password='root123', created_at='2020-05-04 12:00:00')
    )
    db.session.commit()


listen(User.__table__, 'after_create', insert_users)