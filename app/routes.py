


# Routes
@app.route('/')
def hello():
    return {'hello': 'world'}

@app.route('/users', methods=['POST', 'GET'])
def handle_users():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_user = UserModel(username=data['username'], password=data['password'])

