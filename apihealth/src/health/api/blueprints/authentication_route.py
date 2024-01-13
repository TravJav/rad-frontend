
import logging
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, jwt_required

from apihealth.src.health.api.services.query_services.authentication_management_queries import AuthenticationManagementQueries


authentication_bp = Blueprint("authentication", __name__)

@authentication_bp.route('/login', methods=['POST'])
def login() -> jsonify:
    try:
        data = request.get_json()
        login_time = data.get('loginTime')
        local_time = data.get('localtime')
        password = data.get('password')
        email = data.get('email')
        session_info: dict = AuthenticationManagementQueries().new_login(email, password, local_time, login_time)
        return jsonify(session_info)
    except (KeyError, ValueError) as e:
        logging.exception("Issue parsing response object: {} ".format(e))
        return jsonify(
            {
                "success": False,
                "message": "Unable to get loading information," " please try again later",
            }
        )


@authentication_bp.route('/refreshjwt', methods=['POST'])
def refresh_user_session_jwt() -> jsonify:
    try:
        data = request.get_json()
        login_time = data.get('loginTime')
        local_time = data.get('localtime')
        password = data.get('password')
        email = data.get('email')
        session_info: dict = AuthenticationManagementQueries().new_login(email, password, local_time, login_time)
        return jsonify(session_info)
    except (KeyError, ValueError) as e:
        logging.exception("Issue parsing response object: {} ".format(e))
        return jsonify(
            {
                "success": False,
                "message": "Unable to get loading information," " please try again later",
            }
        )
