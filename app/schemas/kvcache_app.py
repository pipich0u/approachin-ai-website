from pydantic import BaseModel


# quanted_llm schemas
class QuantedllmBase(BaseModel):
    name: str
    quantedllm_download_path: str


class QuantedllmCreate(QuantedllmBase):
    pass 


class QuantedllmDetial(QuantedllmBase):
    id: int

    class Config:
        from_attributes = True



# kvcache schemas
class KvcacheBase(BaseModel):
    kvcache_app_id: int
    quantedllm_id: int
    kvcache_download_path: str


class KvcacheCreate(KvcacheBase):
    pass


class KvcacheDetail(KvcacheBase):
    latest_updated_time: str
    kvcache_size: int


class KvcacheWithllmInfo(KvcacheDetail):
    quantedllm_name: str
    quantedllm_download_path: str


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


class KvcacheAppHomeSummary(KvcacheAppSummary):
    quantedllm: list[QuantedllmDetial]
    
    class Config:
        from_attributes = True


class KvcacheAppDetial(KvcacheAppSummary):

    description: str | None = None
    latest_updated_time : str

    kvcache: list[KvcacheWithllmInfo]

    class Config:
        from_attributes = True

