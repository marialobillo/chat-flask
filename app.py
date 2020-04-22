from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import os
import datetime

app = Flask(__name__)

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import User, Channel, Message


@app.route("/")
def hello():
    return "Hello Root"


@app.route('/users', methods=['POST', 'GET'])
def add_user():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_user = User(
                username = data['username'],
                email = data['email'],
                password = data['password']
            )
            db.session.add(new_user)
            db.session.commit()
            return {"message": f"User {new_user.username} has been created successfully."}
        else:
            return {"error": "The request payload is not is JSON format"}

    elif request.method == 'GET':
        users = User.query.all()
        results = [
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "password": user.password,
                "created_at": user.created_at
            } for user in users
        ]
        return {"count": len(results), "users": results}



@app.route('/users/<user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    user = User.query.get_or_404(user_id)

    if request.method == 'GET':
        response = {
            "username": user.username,
            "email": user.email,
            "password": user.password
        }
        return {"message" : "success", "user": response}

    elif request.method == 'PUT':
        data = request.get_json()
        user.username = data['username']
        user.email = data['email']
        user.password = data['password']
        user.modified_at = datetime.datetime.utcnow()
        db.session.add(user)
        db.session.commit()
        return { "message": f"User {user.username} successfully updated." }

    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return {"message": f"User {user.username} successfully deleted."}

@app.route('/login', methods=['POST'])
def login_user():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            user = User.get_user_by_email(data['email'])
            if user.password == data['password']:
                # user is logged in
                return {"message": "the user was logged in"}
            else:
                return {"message": "the arguments are not valid"}

    # login is not finish 



if __name__ == '__main__':
    app.run()