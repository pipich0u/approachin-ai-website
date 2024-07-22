#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache_app schemas
Author       : linchen
Date         : 2024-07-20 12:27:00
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 11:48:07
'''


from pydantic import BaseModel
from app.schemas.llm import LlmDetial
from app.schemas.kvcache import KvcacheWithllmInfo



# kvcache_app schemas
class KvcacheAppBase(BaseModel):
    title: str
    picture: str | None = None
    summary: str | None = None


class KvcacheAppCreate(KvcacheAppBase):
    # 创建时前端传入的 信息
    pass



class KvcacheAppSummary(KvcacheAppBase):

    id: int
    pull_count: int
    star_count: int

    class Config:
        from_attributes = True  


class KvcacheAppHomeSummary(KvcacheAppSummary):
    llm: list[LlmDetial]


class KvcacheAppDetial(KvcacheAppSummary):

    description: str | None = None
    latest_updated_time : int

    kvcache: list[KvcacheWithllmInfo]
