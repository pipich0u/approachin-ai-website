#!/usr/bin/env python
# coding=utf-8
'''
Description  : main function, app entry
Author       : linchen
Date         : 2024-07-18 12:42:46
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:56:10
'''
from fastapi import FastAPI
from app.utils.sql_util import Base, SQLUtil
from app.api import router


sql_util = SQLUtil()
Base.metadata.create_all(bind=sql_util.sqlalchemy_engine)
app = FastAPI()
app.include_router(router)
