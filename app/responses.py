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

