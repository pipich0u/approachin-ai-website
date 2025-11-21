import { request } from './request';
interface SearchModelParams {
    name?: { FUZZY: string };
    family?: { MULTI_EQUAL: string[] };
    category?: { MULTI_EQUAL: string[] };
    weight_size?: { MULTI_RANGE: [number, number][] };
    max_position_embeddings?: { MULTI_RANGE: [number, number][] };
    quanted_type?: { MULTI_EQUAL: string[] };
    source?: { MULTI_EQUAL: string[] };
}

export const getModels = async (params:{page:number,pageSize:number}) => {
    return request('/api/model-metadata', {
        method: 'POST',
        params: params
    });
}

export const searchModels = async (body: SearchModelParams,params:{page:number,pageSize:number}) => {
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