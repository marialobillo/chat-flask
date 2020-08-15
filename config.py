

class Config:
    pass 


class ProductionConfig(Config):
    DEBUG = False 
    SQLALCHEMY_DATABASE_URI = 'postgres://jbidrpgimxwynr:4a2d7ec8d8516f7cc17c1166bd4dd38bc68ab99ae0bdfeacc2a446092be39894@ec2-34-236-215-156.compute-1.amazonaws.com:5432/dah5cftofl4bte'
    SQLALCHEMY_TRACK_MODIFICATIONS = False 
    SECRET_WORD = 'theredcatisblue'


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
    'test': TestConfig,
    'deploy': ProductionConfig,
}