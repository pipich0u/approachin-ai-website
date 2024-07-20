from sqlalchemy import Table, Column, ForeignKey, Integer, String, UniqueConstraint
from sqlalchemy.orm import relationship

from utils.database import Base


kvcache = Table(
    'kvcache',
    Base.metadata,
    Column('kvcache_app_id', Integer, ForeignKey("kvcache_app.id")), 
    Column('quantedllm_id', Integer, ForeignKey("quantedllm.id")),
    Column('kvcache_download_path', String),    # kvcache 下载链接
    Column('latest_updated_time', String),      # 最近更新时间
    Column('kvcache_size', Integer),            # kvcache 大小
)

 
class KvcacheApp(Base):
    __tablename__ = "kvcache_app"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)   # 唯一主键
    
    title = Column(String, index=True)      # 标题，用户创建时指定
    picture = Column(String)                # 图片的路径
    summary = Column(String)                # 总结
    description = Column(String)            # 介绍

    pull_count = Column(Integer)            # 下载量
    star_count = Column(Integer)            # 点赞数
    latest_updated_time = Column(String)    # 最新更改时间

    quantedllm = relationship('Quantedllm', secondary=kvcache, back_populates='kvcache_app')


class Quantedllm(Base):
    __tablename__ = "quantedllm"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)   # 唯一主键
    name = Column(String)                        # model name
    quantedllm_download_path = Column(String)    # model 下载url

    kvcache_app = relationship('KvcacheApp', secondary=kvcache, back_populates='quantedllm')

