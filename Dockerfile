



# syntax=docker/dockerfile:experimental
#----------------------------
FROM python:3.11 AS base-stage

ENV NEW_RELIC_MONITOR_MODE=false
ENV LOGGING_PATH /tmp/logs/
ENV FLASK_APP=apiheath.health.api:app
ENV FLASK_ENV=development
ENV FLASK_DEBUG=1

RUN apt-get update \
    && apt-get -y install \
        gcc \
        python3-dev \
        libpcre3 \
        libpcre3-dev \
        libpq-dev \
        tox \
        postgresql-server-dev-all \
    && pip install -U --no-cache-dir pip poetry \
    && pip install lockfile \
    && pip install Flask \
    && pip install python-dotenv

# Set the working directory
WORKDIR /app

# Install dependencies
COPY . .
COPY pyproject.toml poetry.lock ./




# Create the directory for logs
RUN mkdir -p /tmp/logs/ && \
    touch /tmp/logs/{info.log, errors.log, debug.log, critical.log, warn.log}

# Expose the necessary port
EXPOSE 5000

CMD tail -f /dev/null





# # Base stage for setting up Python and dependencies
# FROM python:3.11 AS base-stage


# # Configure Poetry
# ENV POETRY_VERSION=1.5.1
# ENV POETRY_HOME=/opt/poetry
# ENV POETRY_VENV=/opt/poetry-venv
# ENV POETRY_CACHE_DIR=/opt/.cache

# # Install necessary system dependencies
# RUN apt-get update && apt-get -y install curl

# # Download and install Poetry
# # RUN curl -sSL https://install.python-poetry.org | python -
# # Install poetry separated from system interpreter
# RUN python3 -m venv $POETRY_VENV \
#     && $POETRY_VENV/bin/pip install -U pip setuptools \
#     && $POETRY_VENV/bin/pip install poetry==${POETRY_VERSION}


# RUN apt-get update \
#     && apt-get -y install \
#         gcc \
#         python3-dev \
#         libpcre3 \
#         libpcre3-dev \
#         libpq-dev \
#         tox \
#     && pip install -U --no-cache-dir pip poetry \
#     && pip install lockfile

# # Add `poetry` to PATH
# ENV PATH="${PATH}:${POETRY_VENV}/bin"
# # Set up environment variables for Poetry
# ENV PATH="/root/.poetry/bin:$PATH"



# # Copy the project files to /opt/app
# # COPY . /opt/app
# # Display the contents of the directory for verification
# WORKDIR /opt/app/

# # Display the contents of the directory for verification
# RUN ls -la
# COPY . .


# # Display the contents of the directory for verification
# RUN poetry config virtualenvs.create false && \
#     poetry install

# # Ensure that the Docker image uses Python 3.11.x
# RUN apt-get update && apt-get install -y python3.11 python3.11-dev \
#     && rm -f /usr/local/bin/python \
#     && ln -s /usr/bin/python3.11 /usr/local/bin/python

# # Set up environment variables and logging path
# ENV LOGGING_PATH /tmp/logs/
# ENV FLASK_APP=apiheath.health.api:app
# ENV FLASK_ENV=development
# ENV FLASK_DEBUG=1

# # Create the directory for logs
# RUN mkdir -p /tmp/logs/ && \
#     touch /tmp/logs/{info.log, errors.log, debug.log, critical.log, warn.log}

# # Expose the necessary port
# EXPOSE 5000

# # Command to keep the container alive
# CMD tail -f /dev/null
