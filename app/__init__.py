from flask import Flask

app = Flask(__name__)

def create_app(environment):
    app.config.from_object(environment)

    return app