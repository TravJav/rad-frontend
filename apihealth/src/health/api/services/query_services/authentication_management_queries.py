import logging
from apihealth.src.health.api.services.query_services.session.session_manager import DatabaseConnection
from apihealth.src.health.api.services.handlers.authentication_handler import AuthenticationHandler


class AuthenticationManagementQueries:

    def __init__(self, request_session=DatabaseConnection()):
        self.request_session = request_session

    def new_login(self, email, password, local_time, login_time):
        try:
            with self.request_session as connection:
                cursor = connection.cursor()
                query = 'SELECT email, username, password, uuid FROM users WHERE email = %s'
                cursor.execute(query, (email,))
                result = cursor.fetchone()
                cursor.close()
                connection.close()
                if result:
                    obtained_username = result[1]  # Assuming username is at index 1 in the result
                    obtained_email = result[0]  # Assuming email is at index 0 in the result
                    hashed_password = result[2]  # Assuming password is at index 2 in the result
                    uuid = result[3]
                    authenticate_user = AuthenticationHandler()
                    if authenticate_user.compare_password(password, hashed_password):
                        self.update_last_login_time(email, login_time=login_time)
                        greeting_message = None if local_time is None else determine_proper_greeting(local_time, obtained_username)
                        return {"jwt": authenticate_user.generate_jwt_session_token(uuid), 'username': obtained_username, 'email': obtained_email, 'greeting': greeting_message }
                    else:
                        return False
                else:
                    return False
        except Exception as e:
            logging.error(e)
            return False
    
    def update_last_login_time(self, email, login_time):
        try:
            with self.request_session as connection:
                cursor = connection.cursor()
                text = 'UPDATE users SET last_login = %s, user_status = %s WHERE email = %s'
                values = (login_time, True, email)
                cursor.execute(text, values)
                # Commit the transaction
                connection.commit()
                cursor.close()
                return True
        except Exception as e:
            logging.error(e)
            return False


def determine_proper_greeting(local_hour: int, username: str) -> str:
        greeting = ''
        if 0 <= local_hour <= 3:
            greeting = f'You are working late today {username} have a quiet productive night!'
        elif 4 <= local_hour <= 9:
            greeting = f'Good morning {username}! '
            if local_hour == 4:
                greeting += 'Have a great early start to your day'
            elif local_hour == 5 or local_hour == 6:
                greeting += 'Early bird gets the worm, have a great start to your day'
            elif local_hour == 7:
                greeting += 'Have a great start to your day'
            elif local_hour == 8:
                greeting += 'Hope you got lots of rest, have a great day'
        elif 10 <= local_hour <= 11:
            greeting = f'Good morning {username}! '
            if local_hour == 10:
                greeting += 'Did you grab some coffee? hope you had a good sleep'
        elif 12 <= local_hour <= 13:
            greeting = f'Did you grab some healthy food {username}? Have a great day'
            if local_hour == 13:
                greeting = f'Good afternoon {username}! '
        elif 14 <= local_hour <= 17:
            greeting = f'Good afternoon {username}! '
        elif 18 <= local_hour <= 20:
            greeting = f'Good evening {username}! '
            if local_hour == 19:
                greeting += 'remember to take it easy too!'
            elif local_hour == 20:
                greeting += 'Working late I guess?'
        elif 21 <= local_hour <= 24:
            greeting = f'Good evening {username}! '
            if local_hour == 22 or local_hour == 23 or local_hour == 24:
                greeting += "you're working late tonight I see"
        return greeting