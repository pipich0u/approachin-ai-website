#!/usr/bin/env python
# coding=utf-8
'''
Description  : api
Author       : linchen
Date         : 2024-07-20 12:04:45
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 12:01:13
'''
from fastapi import APIRouter
from .kvcache_app import router as kvcache_app_router
from .llm import router as llm_router
from .kvcache import router as kvcache_router


router = APIRouter()
router.include_router(kvcache_app_router)
router.include_router(llm_router)
router.include_router(kvcache_router)
