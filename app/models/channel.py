from . import db    

class Channel(db.Model):

    __tablename__ = 'channel'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())


    def __str__(self):
        return self.name