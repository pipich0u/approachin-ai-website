#!/usr/bin/env python
# coding=utf-8
'''
Description  : 
Author       : linchen
Date         : 2024-07-22 08:50:31
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:56:06
'''
from fastapi import HTTPException, status


def db_exception():
    return HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail="DB Error",
    )
