from flask import Flask

from .models import db
from .models.user import User 
from .models.channel import Channel
from .models.message import Message

from .routes import api_v1 

app = Flask(__name__)

def create_app(environment):

    app.config.from_object(environment)

    app.register_blueprint(api_v1)

    with app.app_context():
        db.init_app(app)
        db.create_all()
    
    return app