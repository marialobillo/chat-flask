

class Config:
    pass 


class DevelopmentConfig(Config):
    DEBUG = True 
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:root123@localhost:5432/chat_dev'
    SQLALCHEMY_TRACK_MODIFICATIONS = False 

config = {
    'development': DevelopmentConfig
}