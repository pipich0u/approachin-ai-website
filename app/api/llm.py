#!/usr/bin/env python
# coding=utf-8
'''
Description  : llm api
Author       : linchen
Date         : 2024-07-22 04:21:01
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 14:52:42
'''
from fastapi import APIRouter
from app.schemas.llm import LlmDetial, LlmCreate
from app.crud.llm import LlmDatabaseManager

router = APIRouter()
llm_database_manager = LlmDatabaseManager()


@router.get("/get_all_llm_info", response_model=list[LlmDetial])
async def get_all_llm_info():
    return llm_database_manager.get_all_llm_info()


@router.post("/upload_llm_info", response_model=LlmDetial)
async def upload_llm_info(db_llm: LlmCreate):
    return llm_database_manager.upload_llm_info(llm=db_llm)
