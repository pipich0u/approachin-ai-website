from sqlalchemy.orm import Session

import models, schemas


def create_kvcache_app(db: Session, kvcache: schemas.KvcacheAppCreate, latest_updated_time: str):

    db_kvcache = models.KvcacheApp(
        title = kvcache.title,
        picture = kvcache.picture,
        summary = kvcache.summary,
        description = "",

        pull_count = 0,        
        star_count = 0,
        latest_updated_time = latest_updated_time
    )

    db.add(db_kvcache)
    db.commit()
    db.refresh(db_kvcache)

    return db_kvcache

def upload_model_info(db: Session, quantedllm: schemas.QuantedllmCreate):
    db_quantedllm = models.Quantedllm(
        name = quantedllm.name,
        quantedllm_download_path = quantedllm.quantedllm_download_path
    )

    db.add(db_quantedllm)
    db.commit()
    db.refresh(db_quantedllm)
    
    return db_quantedllm

def upload_kvcache(db:Session, kvcache: schemas.KvcacheCreate, latest_updated_time: str, kvcache_size: int):

    insert_statement = models.kvcache.insert().values(
        kvcache_app_id = kvcache.kvcache_app_id,
        quantedllm_id = kvcache.quantedllm_id,
        kvcache_download_path = kvcache.kvcache_download_path,
        latest_updated_time = latest_updated_time,
        kvcache_size = kvcache_size
    )

    db.execute(insert_statement)
    db.commit()

    print(insert_statement)

    return kvcache

def get_kvcache_app_detial(db: Session, kvcache_app_id: int):
    return db.query(models.KvcacheApp).filter(models.KvcacheApp.id == kvcache_app_id).first()

def get_all_kvcache_app_summary(db: Session):
    return db.query(models.KvcacheApp)

def get_quantedllm_info(db: Session, quantedllm_id: int):
    return db.query(models.Quantedllm).filter(models.Quantedllm.id == quantedllm_id).first()

def get_kvcache_info(db:Session, kvcache_app_id: int, quantedllm_id: int):
    return db.query(models.kvcache).filter(
        models.kvcache.c.kvcache_app_id == kvcache_app_id,
        models.kvcache.c.quantedllm_id == quantedllm_id
    ).first()

def get_all_quantedllm_info(db: Session):
    return db.query(models.Quantedllm)