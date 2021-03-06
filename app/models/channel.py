from . import db 
from sqlalchemy.event import listen    

class Channel(db.Model):

    __tablename__ = 'channel'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'created_at': self.created_at
        }

    @classmethod
    def new(cls, name):
        return Channel(name=name, description="Description channel")

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
        return self.name



def insert_channels(*args, **kwargs):
    db.session.add(
        Channel(name='General', description='General Channel', created_at='2020-04-05 12:00:00')
    )
    db.session.add(
        Channel(name='Python', description='Python Channel', created_at='2020-04-05 12:00:00')
    )
    db.session.commit()


listen(Channel.__table__, 'after_create', insert_channels)