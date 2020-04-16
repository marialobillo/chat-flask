from app import db


class Channel(db.Model):
    __tablename__ = 'channels'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')
    name = db.Column(db.String())
    description = db.Column(db.String())
    created_at = db.Column(bdd.DateTime, index=True)
    updated_at = db.Column(bdd.DateTime, index=True, default=datetime.now)


    def __repr__(self):
        return self.cchannel