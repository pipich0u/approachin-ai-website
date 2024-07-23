#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache_app api
Author       : linchen
Date         : 2024-07-20 12:18:34
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:52:23
'''
from time import time

from fastapi import APIRouter
from app.schemas.kvcache_app import KvcacheAppCreate, KvcacheAppSummary, KvcacheAppDetial, KvcacheAppHomeSummary
from app.crud.kvcache_app import KvcacheAppDatabaseManager
from app.crud.kvcache import KvcacheDatabaseManager


router = APIRouter()
kvcache_app_database_manager = KvcacheAppDatabaseManager()
kvcache_database_manager = KvcacheDatabaseManager()


@router.post("/create_kvcache_app", response_model=KvcacheAppSummary)
async def create_kvcache_app(db_kvcache_app: KvcacheAppCreate):

    current_time = time()
    current_time_millis = int(round(current_time * 1000))

    return kvcache_app_database_manager.create_kvcache_app(
        kvcache_app=db_kvcache_app,
        latest_updated_time=current_time_millis
    )


@router.get("/get_all_kvcache_app_summary", response_model=list[KvcacheAppHomeSummary])
async def get_all_kvcache_app_summary():
    return kvcache_app_database_manager.get_all_kvcache_app_summary()


@router.get("/get_kvcache_app_detial/{kvcache_app_id}", response_model=KvcacheAppDetial)
async def get_kvcache_app_detial(kvcache_app_id: int):
    kvcache_app_detial = kvcache_app_database_manager.get_kvcache_app_detial(
        kvcache_app_id=kvcache_app_id)
    related_kvcache = kvcache_database_manager.get_app_related_kvcache_info(
        kvcache_app_id)

    return KvcacheAppDetial(
        id=kvcache_app_detial.id,
        title=kvcache_app_detial.title,
        picture=kvcache_app_detial.picture,
        summary=kvcache_app_detial.summary,
        pull_count=kvcache_app_detial.pull_count,
        star_count=kvcache_app_detial.star_count,
        description=kvcache_app_detial.description,
        latest_updated_time=kvcache_app_detial.latest_updated_time,
        kvcache=related_kvcache
    )
