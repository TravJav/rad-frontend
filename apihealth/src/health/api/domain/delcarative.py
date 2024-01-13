# #!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright Invictus (C) - All Rights Reserved
# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and Confidential

import uuid
import datetime

# from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy import (
    JSON,
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    Time,
)
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()
metadata = Base.metadata
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, Boolean, Time, JSON, ARRAY
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Users(Base):
    __tablename__ = 'users'

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(30), unique=True, nullable=True)
    password = Column(String(70), nullable=True)
    username = Column(String(30), unique=True, nullable=True)
    dob = Column(Text, nullable=True)
    country = Column(String(30), nullable=True)
    state = Column(String(30), nullable=True)
    city = Column(String(30), nullable=True)
    date = Column(DateTime, nullable=True)
    firstname = Column(String(30), nullable=True)
    lastname = Column(String(30), nullable=True)
    user_status = Column(Boolean, nullable=True)
    last_login = Column(DateTime, nullable=True)
    profile_picture = Column(Text, nullable=True)
    sex = Column(String(7), nullable=True)
    physical_address = Column(Text, nullable=True)
    phone_number = Column(Text, nullable=True)
    membership_type = Column(Text, nullable=True)
    last_logout = Column(DateTime, nullable=True)

class Videos(Base):
    __tablename__ = 'videos'

    upload_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    video_link = Column(Text, nullable=True)
    original_name = Column(Text, nullable=True)
    assigned_name = Column(Text, nullable=True)
    author_name = Column(Integer, ForeignKey('users.user_id'), nullable=True)
    author_comment = Column(Text, nullable=True)
    public_comments = Column(Text, nullable=True)
    comments_enabled = Column(Boolean, nullable=True)
    profile_image = Column(Boolean, nullable=True)
    upload_date = Column(DateTime, nullable=True)
    post_dislikes = Column(Text, nullable=True)
    post_likes = Column(Text, nullable=True)

class Supplements(Base):
    __tablename__ = 'supplements'

    diet_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    username = Column(Integer, ForeignKey('users.user_id'), nullable=True)
    template = Column(Text, nullable=True)
    author_comment = Column(Text, nullable=True)
    upload_date = Column(DateTime, nullable=True)

class Sleep(Base):
    __tablename__ = 'sleep'

    sleep_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    template = Column(Text, nullable=True)
    weekly = Column(Text, nullable=True)
    monthly = Column(Text, nullable=True)
    yearly = Column(Text, nullable=True)
    upload_date = Column(DateTime, nullable=True)

class OtherActivities(Base):
    __tablename__ = 'other_activities'

    activity_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    intensity = Column(Integer, nullable=True)
    activity_type = Column(Text, nullable=True)
    duration = Column(Integer, nullable=True)
    upload_date = Column(DateTime, nullable=True)

class Routine(Base):
    __tablename__ = 'routine'

    routine_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    workout = Column(Text, nullable=True)
    personal_record = Column(Boolean, nullable=True)
    workout_id = Column(String(50), unique=True, nullable=True)
    upload_date = Column(DateTime, nullable=True)

class Relationships(Base):
    __tablename__ = 'relationships'

    record = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_one = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    user_two = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    relationship_status = Column(Integer, nullable=True)
    date = Column(DateTime, nullable=True)
    request_sent_by = Column(Integer, nullable=True)

class Posts(Base):
    __tablename__ = 'posts'

    post_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    post_owner = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    photo = Column(Text, nullable=True)
    email = Column(String(50), nullable=True)
    username = Column(String(50), nullable=True)
    author_comment = Column(Text, nullable=True)
    upload_date = Column(DateTime, nullable=True)
    post_comments = Column(Text, nullable=True)
    post_likes = Column(Text, nullable=True)
    post_dislikes = Column(Text, nullable=True)

class Photos(Base):
    __tablename__ = 'photos'

    upload_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    photo_link = Column(Text, nullable=True)
    original_name = Column(Text, nullable=True)
   