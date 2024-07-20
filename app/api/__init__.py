from fastapi import APIRouter
from .kvcache_app import router as kvcache_app_router


router = APIRouter()
router.include_router(kvcache_app_router)