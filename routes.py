from models import User, Channel, Message 
from app import db 

@app.route('/user/add')
def add_user():
    username = request.args.get('username')
    email = request.args.get('email')
    password = request.args.get('password')

    try:
        user = User(
            username = username,
            email = email,
            password = password
        )
        db.session.add(user)
        db.session.commit()
        return "User added. Username = {}".format(user.username)
    except Exception as e:
        return(str(e))
