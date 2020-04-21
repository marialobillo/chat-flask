from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Root"



if __name__ == '__main__':
    app.run()