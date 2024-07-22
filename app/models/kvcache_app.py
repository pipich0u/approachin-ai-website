#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache_app model, define kvcache_app's table in database
Author       : linchen
Date         : 2024-07-20 12:26:30
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:54:10
'''

from sqlalchemy import Column, Integer, String

from sqlalchemy.orm import relationship

from app.models.kvcache import Kvcache
from app.utils.sql_util import Base


class KvcacheApp(Base):
    __tablename__ = "kvcache_app"

    id = Column(Integer, primary_key=True, index=True,
                autoincrement=True)             # 唯一主键

    title = Column(String, index=True)          # 标题，用户创建时指定
    picture = Column(String)                    # 图片的路径
    summary = Column(String)                    # 总结
    description = Column(String)                # 介绍

    pull_count = Column(Integer)                # 下载量
    star_count = Column(Integer)                # 点赞数
    latest_updated_time = Column(Integer)       # 最新更改时间

    llm = relationship('Llm', secondary=Kvcache, back_populates='kvcache_app')
