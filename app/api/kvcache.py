#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache api
Author       : linchen
Date         : 2024-07-22 04:20:29
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 09:01:27
'''
from time import time

from fastapi import APIRouter
from app.schemas.kvcache import KvcacheCreate
from app.crud.kvcache import KvcacheDatabaseManager
from app.constants import Constants

router = APIRouter()
kvcache_database_manager = KvcacheDatabaseManager()


@router.post("/upload_kvcache",response_model=KvcacheCreate)
async def upload_kvcache(db_kvcache: KvcacheCreate):
    # TODO: get latest_updated_time and kvcache_size from web, now is hard writen

    current_time = time()
    current_time_millis = int(round(current_time * 1000))
    kvcache_size = Constants.DEFAULT_KVCACHE_SIZE

    return kvcache_database_manager.upload_kvcache(
        kvcache=db_kvcache,
        latest_updated_time=current_time_millis,
        kvcache_size=kvcache_size
    )
