from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required


status_checks_bp = Blueprint("status_checks", __name__)

@status_checks_bp.route("/status", methods=["GET"])
def get_public_status_check() -> jsonify:
    return jsonify(
    {
    "success": True,
    "message": "Public status check endpoint is operational",
    }
    )


@status_checks_bp.route("/status/auth", methods=["GET"])
@jwt_required()
def get_private_status_check() -> jsonify:
    return jsonify(
    {
    "success": True,
    "message": "Private status check endpoint is operational",
    }
    )