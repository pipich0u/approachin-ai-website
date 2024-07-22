#!/usr/bin/env python
# coding=utf-8
'''
Description  : llm model, define llm table in database, which records the optional llm info
Author       : linchen
Date         : 2024-07-22 02:55:35
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 08:42:41
'''

from sqlalchemy import Column, Integer, String

from sqlalchemy.orm import relationship

from app.models.kvcache import Kvcache
from app.utils.sql_util import Base



class Llm(Base):
    __tablename__ = "llm"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)   # 唯一主键
    name = Column(String)                        # model name
    llm_download_path = Column(String)    # model 下载url

    kvcache_app = relationship('KvcacheApp', secondary=Kvcache, back_populates='llm')
