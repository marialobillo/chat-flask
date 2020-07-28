

class Config:
    pass 


class DevelopmentConfig(Config):
    DEBUG = True 
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:password@localhost:5432/chat_dev'
    SQLALCHEMY_TRACK_MODIFICATIONS = False 
    SECRET_WORD = 'theredcatisblue'

class TestConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:password@localhost:5432/chat_test'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_WORD = 'theredcatisblue'

config = {
    'development': DevelopmentConfig,
    'test': TestConfig
}