from . import db 
from sqlalchemy.event import listen 


class User(db.Model):

    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())


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