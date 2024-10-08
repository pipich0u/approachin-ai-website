import { instance } from './axios'
import type { KVcacheInfo, KVcachedetail, AllKVcacheSummary } from '../utils/types';
export async function getAllKVSummary(): Promise<AllKVcacheSummary[]> {
    const response: AllKVcacheSummary[] = await instance.get('/get_all_kvcache_app_summary');
    return response;
}
export async function getKVdetail(id: string): Promise<KVcachedetail[]> {
    const respones: KVcachedetail[] = await instance.get(`/get_kvcache_app_detail/${id}`);
    return respones
}
export async function getAllInfo(): Promise<KVcacheInfo[]> {
    const respones: KVcacheInfo[] = await instance.get('/get_all_llm_info');
    return respones
}