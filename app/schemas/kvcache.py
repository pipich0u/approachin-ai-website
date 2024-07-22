#!/usr/bin/env python
# coding=utf-8
'''
Description  : kvcache schemas
Author       : linchen
Date         : 2024-07-22 03:18:49
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 11:48:14
'''


from pydantic import BaseModel




# kvcache schemas
class KvcacheBase(BaseModel):
    kvcache_app_id: int
    llm_id: int
    kvcache_download_path: str


class KvcacheCreate(KvcacheBase):
    pass


class KvcacheDetail(KvcacheBase):
    latest_updated_time: int
    kvcache_size: int


class KvcacheWithllmInfo(KvcacheDetail):
    llm_name: str
    llm_download_path: str

    class Config:
        from_attributes = True  
