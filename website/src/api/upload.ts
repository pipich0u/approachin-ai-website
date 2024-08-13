import { instance } from './axios'
import type { CreateKVApp, createKVSuc } from '../utils/types';
export async function createKVcacheApp(data: any): Promise<createKVSuc[]> {
    const response: createKVSuc[] = await instance({
        url: '/create_kvcache_app',
        method: "POST",
        data: data
    })
    console.log(response, 'nininii');

    return response;
}
// export async function getKVdetail(id: string): Promise<KVcachedetail[]> {
//     const respones: KVcachedetail[] = await instance.get(`/get_kvcache_app_detail/${id}`);
//     return respones
// }
// export async function getAllInfo(): Promise<KVcacheInfo[]> {
//     const respones: KVcacheInfo[] = await instance.get('/get_all_llm_info');
//     return respones
// }