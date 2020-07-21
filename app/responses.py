from flask import jsonify


def response(data):
    return jsonify(
        {
            'success': True,
            'data': data
        }
    ), 200

def not_found():
    return jsonify(
        {
            'success': False, 
            'data': {},
            'message': 'Resource not found',
            'code': 404
        }
    ), 404

def bad_request():
    return jsonify({
        'success': False, 
        'data': {},
        'message': 'Bad Request',
        'code': 400
    }), 400

def auth_response(data, token):
    return jsonify(
        {
            'success': True, 
            'token': token, 
            'data': data,
            'code': 200
        }
    ), 200