#!/usr/bin/env python
# coding=utf-8
'''
Description  : llm schemas
Author       : linchen
Date         : 2024-07-22 03:18:54
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:55:10
'''

from pydantic import BaseModel


# llm schemas
class LlmBase(BaseModel):
    name: str
    llm_download_path: str


class LlmCreate(LlmBase):
    pass


class LlmDetial(LlmBase):
    id: int

    class Config:
        from_attributes = True
