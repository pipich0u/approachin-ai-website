export interface KVcacheInfo {
    id: number;
    llm_download_path: string;
    name: string;
}
export interface KVcachedetail {
    id: number;
    description: string;
    picture: string;
    latest_updated_time: number;
    pull_count?: number | undefined;
    star_count?: number | undefined;
    summary: string
    title: string
    kvcache: kvcache[]
}
export interface kvcache {
    kvcache_app_id: number
    kvcache_download_path: string
    kvcache_size: number
    latest_updated_time: number
    llm_download_path: string
    llm_id: number
    llm_name: string
}
export interface AllKVcacheSummary {
    id: number;
    title: string;
    picture?: string;
    llm: KVcacheInfo[];
    pull_count?: number;
    star_count?: number;
    summary?: string;
}
export interface CreateKVApp {
    title: string,
    picture: object,
    summary: string,
    link?: Array<[object]>
}
export interface createKVSuc {
    title: string,
    picture: string,
    summary: string,
    id: number
    pull_count: number
    star_count: number
}