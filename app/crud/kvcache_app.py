#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache_app table crud
Author       : linchen
Date         : 2024-07-20 12:25:47
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:53:30
'''

from sqlalchemy.orm import Session

from app.models.kvcache_app import KvcacheApp
from app.schemas.kvcache_app import KvcacheAppCreate
from app.utils.sql_util import SQLUtil


class KvcacheAppDatabaseManager():

    def __init__(self) -> None:
        self.sql_util = SQLUtil()

    def create_kvcache_app(self, kvcache_app: KvcacheAppCreate, latest_updated_time: int):
        with self.sql_util.get_db() as db:
            db_kvcache_app = KvcacheApp(
                title=kvcache_app.title,
                picture=kvcache_app.picture,
                summary=kvcache_app.summary,
                description="",

                pull_count=0,
                star_count=0,
                latest_updated_time=latest_updated_time
            )

            db.add(db_kvcache_app)
            db.commit()
            db.refresh(db_kvcache_app)

            return db_kvcache_app

    def get_kvcache_app_detial(self, kvcache_app_id: int):
        with self.sql_util.get_db() as db:
            return db.query(KvcacheApp).filter(KvcacheApp.id == kvcache_app_id).first()

    def get_all_kvcache_app_summary(self):
        with self.sql_util.get_db() as db:
            return db.query(KvcacheApp)
