# #!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright Invictus (C) - All Rights Reserved
# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and Confidential


from typing import Optional, Union, Callable
from flask import request


class FlaskAppConfig:
    """Basic flask app configuration"""

    JWT_AUTH_URL_RULE = None
    SECRET_KEY = "secret"

def get_uuid() -> Optional[str]:
    return request.headers.get("uuid")


def get_username() -> Optional[str]:
    return request.headers.get("username")
