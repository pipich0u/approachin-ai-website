import { FormSubmitResponse } from '@/types/form';
import { request, ResData } from './request';
interface SearchModelParams {
    name?: { FUZZY: string };
    family?: { MULTI_EQUAL: string[] };
    category?: { MULTI_EQUAL: string[] };
    weight_size?: { MULTI_RANGE: [number, number][] };
    max_position_embeddings?: { MULTI_RANGE: [number, number][] };
    quanted_type?: { MULTI_EQUAL: string[] };
    source?: { MULTI_EQUAL: string[] };
}

export const getModels = async (params: { page: number, pageSize: number }) => {
    return request('/api/model-metadata', {
        method: 'POST',
        params: params
    });
}

export const searchModels = async (body: SearchModelParams, params: { page: number, pageSize: number }) => {
    return request('/api/model-metadata', {
        method: 'POST',
        body: body,
        params: params
    });
};

export const modelExportApi = async () => {
    return request('/api/model-metadata/export', {
        method: 'GET',
    });
}
export const filterTagsApi = async () => {
    return request('/api/model-metadata/filter_tags', {
        method: 'GET',
    });
}

export const ModelStepInfoApi = async (model_name: string) => {
    return request('/api/model-metadata/download_tutorial', {
        method: 'GET',
        params: { model_name }
    });
}

export const getModelApi = async (model_name: string) => {
    return request('/api/model-metadata/api_tutorial', {
        method: 'GET',
        params: { model_name }
    });
}

export const getVersion = async () => {
    return request('/api/model-metadata/version', {
        method: 'GET',
    });
}

export const getGitSource = async (org: string, repo: string, perPage: number = 100, page: number = 1) => {
    return request(`https://api.github.com/repos/${org}/${repo}/contributors`, {
        method: 'GET',
        params: {
            per_page: Math.min(perPage, 100), // GitHub API 最大支持 100
            page: page
        },
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'approaching-ai-app'
        }
    });
}

export const SubmitFormData = async (data:FormSubmitResponse) => {
    return request<{ success: boolean }>('/nest/info', {
        method: 'POST',
        body: data
    });
}

// export const GetFormData = async () => {
//     return request('/nest/info', {
//         method: 'GET',
//     });
// }
