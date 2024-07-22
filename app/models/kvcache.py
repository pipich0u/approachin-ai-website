#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache model, define kvcache table in database, which is a relation table between kvcache_app and llm
Author       : linchen
Date         : 2024-07-22 02:55:29
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 08:42:40
'''

from sqlalchemy import Table, Column, Integer, ForeignKey,String

from app.utils.sql_util import Base

Kvcache = Table(
    'kvcache',
    Base.metadata,
    Column('kvcache_app_id', Integer, ForeignKey("kvcache_app.id")),
    Column('llm_id', Integer, ForeignKey("llm.id")),
    Column('kvcache_download_path', String),    # kvcache 下载链接
    Column('latest_updated_time', Integer),      # 最近更新时间
    Column('kvcache_size', Integer),            # kvcache 大小
)