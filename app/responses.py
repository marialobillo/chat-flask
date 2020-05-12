from flask import jsonify


def response(data):
    return jsonify(
        {
            'success': True,
            'data': data
        }
    ), 200

