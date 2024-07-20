from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session
from datetime import datetime 

from utils.database import SessionLocal

import schemas, crud
router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



@router.get("/")
async def root():
    return {"message": "Hello World"}


@router.get("/get_all_kvcache_app_summary", response_model=list[schemas.KvcacheAppHomeSummary])
async def get_all_kvcache_app_summary(db: Session=Depends(get_db)):
    return crud.get_all_kvcache_app_summary(db)

@router.get("/get_all_quantedllm", response_model=list[schemas.QuantedllmDetial])
async def get_all_quantedllm(db: Session=Depends(get_db)):
    return crud.get_all_quantedllm_info(db)

@router.get("/get_kvcache_app_detial/{kvcache_app_id}", response_model=schemas.KvcacheAppDetial)
async def get_kvcache_app_detial(kvcache_app_id: int, db: Session=Depends(get_db)):
    kvcache_app_detial = crud.get_kvcache_app_detial(db, kvcache_app_id=kvcache_app_id)
    kvcache = []
    for quantedllm in kvcache_app_detial.quantedllm:
        kvcache_info = crud.get_kvcache_info(db, kvcache_app_id, quantedllm.id)
        kvcache_iter = schemas.KvcacheWithllmInfo(
            kvcache_app_id = kvcache_app_id,
            quantedllm_id = quantedllm.id,
            quantedllm_name = quantedllm.name,
            quantedllm_download_path =  quantedllm.quantedllm_download_path,
            
            kvcache_download_path = kvcache_info.kvcache_download_path,
            latest_updated_time = kvcache_info.latest_updated_time,
            kvcache_size = kvcache_info.kvcache_size
        )
        kvcache.append(kvcache_iter)

    return schemas.KvcacheAppDetial(
        id = kvcache_app_detial.id,
        title = kvcache_app_detial.title,
        picture = kvcache_app_detial.picture,
        summary = kvcache_app_detial.summary,
        pull_count = kvcache_app_detial.pull_count,
        star_count = kvcache_app_detial.star_count,
        description = kvcache_app_detial.description,
        latest_updated_time = kvcache_app_detial.latest_updated_time,
        kvcache = kvcache
    )




@router.post("/create_kvcache_app", response_model=schemas.KvcacheAppSummary)
async def create_kvcache_app(db_kvcache: schemas.KvcacheAppCreate, db: Session=Depends(get_db)):
    latest_updated_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return crud.create_kvcache_app(db=db, kvcache=db_kvcache, latest_updated_time=latest_updated_time)

@router.post("/upload_model_info", response_model=schemas.QuantedllmDetial)
async def upload_model_info(db_quantedllm: schemas.QuantedllmCreate, db: Session=Depends(get_db)):
    return crud.upload_model_info(db=db, quantedllm=db_quantedllm)

@router.post("/upload_kvcache",response_model=schemas.KvcacheCreate)
async def upload_kvcache(db_kvcache: schemas.KvcacheCreate, db: Session=Depends(get_db)):
    # !!! Todo
    # latest_updated_time = get_latest_updated_time()
    # kvcache_size = get_kvcache_size()
    # 
    # Now is hard written 
    latest_updated_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    kvcache_size = 42949672960   # 40 GB

    return crud.upload_kvcache(
        db=db,
        kvcache=db_kvcache,
        latest_updated_time=latest_updated_time,
        kvcache_size=kvcache_size
        )
