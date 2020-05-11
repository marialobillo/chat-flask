from . import db  

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


    def __str__(self):
        return self.content