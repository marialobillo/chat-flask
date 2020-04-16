from app import db


class MessageModel(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')
    channel_id = db.Column(db.Integer, db.ForeignKey('channel.id'))
    content = db.Column(db.String())
    created_at = db.Column(bdd.DateTime, index=True)
    updated_at = db.Column(bdd.DateTime, index=True, default=datetime.now)


    def __repr__(self):
        return self.cchannel