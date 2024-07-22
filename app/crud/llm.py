#!/usr/bin/env python
# coding=utf-8
'''
Description  : llm table crud
Author       : linchen
Date         : 2024-07-22 03:36:27
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 09:03:45
'''
from sqlalchemy.orm import Session

from app.models.llm import Llm
from app.schemas.llm import LlmCreate
from app.utils.sql_util import SQLUtil

class LlmDatabaseManager():


    def __init__(self) -> None:
        self.sql_util = SQLUtil()


    def upload_llm_info(self, llm: LlmCreate):
        with self.sql_util.get_db() as db:
            db_llm = Llm(
                name = llm.name,
                llm_download_path = llm.llm_download_path
            )

            db.add(db_llm)
            db.commit()
            db.refresh(db_llm)
            
            return db_llm


    def get_llm_info(self, llm_id: int):
        with self.sql_util.get_db() as db:
            return db.query(Llm).filter(Llm.id == llm_id).first()


    def get_all_llm_info(self):
        with self.sql_util.get_db() as db:
            return db.query(Llm)