from . import db  
from sqlalchemy.event import listen 

class Message(db.Model):

    __tablename__ = 'message'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), 
        nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey('channel.id'),
        nullable=False)
    content = db.Column(db.Text(), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'channel_id': self.channel_id,
            'content': self.content,
            'created_at': self.created_at
        }

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
            return True
        except:
            return False

    def __str__(self):
        return self.content



def insert_messages(*args, **kwargs):
    db.session.add(
        Message(user_id=1, channel_id=1, content='This is the content', created_at='2020-04-05 12:00:00')
    )
    db.session.add(
        Message(user_id=1, channel_id=1, content='This is the 2nd content', created_at='2020-04-05 12:00:00')
    )
    db.session.commit()


listen(Message.__table__, 'after_create', insert_messages)