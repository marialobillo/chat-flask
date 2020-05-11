from . import db 

class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, 
                default=db.func.current_timestamp())


    def __str__(self):
        return self.username