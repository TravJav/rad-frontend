import json
import unittest
from faker import Faker
from mock import patch

from apihealth.src.health.api import app

from apihealth.tests.unit.fixtures import (
    mock_jwt_required,
)


class TestAuthRoute(unittest.TestCase):

    @classmethod
    def setUp(cls) -> None:
        cls.faker = Faker()
        cls.app = app.config["TESTING"] = True
        cls.client = app.test_client()
        cls.route = "/status"

    @classmethod
    def tearDownClass(cls):
        cls.faker = None
        cls.client = None
        cls.body_request_sample = None

    def test_get_public_status_check(self, *args):
        response = self.client.get('/status')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert data["success"] == True
        assert data["message"] == "Public status check endpoint is operational"

    def test_get_public_status_check_protected_with_no_token(self, *args):
        response = self.client.get('/status/auth')
        assert response.status_code == 401

    @patch("apihealth.src.health.api.blueprints.authentication_route.jwt_required", side_effect=mock_jwt_required)
    def test_get_public_status_check_protected_with_token(self, *args):
        response = self.client.get('/status/auth')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert data["success"] == True
        assert data["message"] == "Private status check endpoint is operational"