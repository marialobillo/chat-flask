from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://yrqpzfeeryvygn:0c13e6925bbd05a699cba88095c6bc5c71b59e8e31d8b54102a882e0260a1353@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dbub92v29b1g1m"

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Model
class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String())
    password = db.Column(db.String())
    created_at = db.Column(db.Date)
    updated_at = db.Column(db.Date)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return self.username


# Routes
@app.route('/')
def hello():
    return {'hello': 'world'}

@app.route('/users', methods=['POST', 'GET'])
def handle_users():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_user = UserModel(username=data['username'], password=data['password'])


if __name__ == '__main__':
    app.run(debug=True)