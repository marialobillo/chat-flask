from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 

from models import User
from models import Channel 
from models import Message 

from routes import routes


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://yrqpzfeeryvygn:0c13e6925bbd05a699cba88095c6bc5c71b59e8e31d8b54102a882e0260a1353@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dbub92v29b1g1m"

db = SQLAlchemy(app)
migrate = Migrate(app, db)




if __name__ == '__main__':
    app.run(debug=True)