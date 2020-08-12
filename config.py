

class Config:
    pass 


class ProductionConfig(Config):
    DEBUG = True 
    SQLALCHEMY_DATABASE_URI = 'postgres://fwrexvfiwqlyzv:6550521c9eee3c6b02a2caf3ace720755a6df285d2b185bd9279c80afa5f9ec4@ec2-54-247-71-245.eu-west-1.compute.amazonaws.com:5432/d1tpl1p3kl8fe
'
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