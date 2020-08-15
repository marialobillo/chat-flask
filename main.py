from app import create_app 
from flask_cors import CORS
from config import config

# environment = config['development']
environment = config['production']

app = create_app(environment)
cors = CORS(app) 

if __name__ == '__main__':
    app.run()