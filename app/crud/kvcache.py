#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache table crud
Author       : linchen
Date         : 2024-07-22 03:36:21
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 11:52:46
'''

from app.models.kvcache import Kvcache
from app.models.llm import Llm
from app.schemas.kvcache import KvcacheCreate
from app.utils.sql_util import SQLUtil

from sqlalchemy.orm import aliased

class KvcacheDatabaseManager():

    def __init__(self) -> None:
        self.sql_util = SQLUtil()


    def upload_kvcache(self, kvcache: KvcacheCreate, latest_updated_time: str, kvcache_size: int):
        with self.sql_util.get_db() as db:
            insert_statement = Kvcache.insert().values(
                kvcache_app_id = kvcache.kvcache_app_id,
                llm_id = kvcache.llm_id,
                kvcache_download_path = kvcache.kvcache_download_path,
                latest_updated_time = latest_updated_time,
                kvcache_size = kvcache_size
            )

            db.execute(insert_statement)
            db.commit()

            return kvcache


    def get_kvcache_info(self, kvcache_app_id: int, llm_id: int):
        with self.sql_util.get_db() as db:
            return db.query(Kvcache).filter(
                Kvcache.c.kvcache_app_id == kvcache_app_id,
                Kvcache.c.llm_id == llm_id
            ).first()
        
    def get_app_related_kvcache_info(self, kvcache_app_id: int):

        kvcache_alias = aliased(Kvcache)
        llm_alias = aliased(Llm)

        with self.sql_util.get_db() as db:

            # joint query
            query_results =  db.query(
                kvcache_alias.c.kvcache_app_id.label('kvcahce_app_id'),
                kvcache_alias.c.llm_id.label('llm_id'),
                kvcache_alias.c.kvcache_download_path.label('kvcache_download_path'),
                kvcache_alias.c.latest_updated_time.label('latest_updated_time'),
                kvcache_alias.c.kvcache_size.label('kvcache_size'),
                llm_alias.name.label('llm_name'),
                llm_alias.name.label('llm_download_path')
                
                ).filter(
                    kvcache_alias.c.kvcache_app_id == kvcache_app_id
                ).join(
                    llm_alias, kvcache_alias.c.llm_id == llm_alias.id
                ).all()
            
            results = [
                {
                    'kvcache_app_id': row[0],
                    'llm_id': row[1],
                    'kvcache_download_path': row[2],
                    'latest_updated_time': row[3],
                    'kvcache_size': row[4],
                    'llm_name': row[5],
                    'llm_download_path': row[6]
                }
                for row in query_results
            ]

            return results
