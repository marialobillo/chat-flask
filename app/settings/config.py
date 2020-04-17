import os 

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

class Ajustes(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'chat-flask'
    SQLACHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or "postgres://yrqpzfeeryvygn:0c13e6925bbd05a699cba88095c6bc5c71b59e8e31d8b54102a882e0260a1353@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dbub92v29b1g1m"
    SQLALCHEMY_TRACK_MODIFICATIONS = False