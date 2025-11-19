import { request } from './request';

export const getModels = async () => {
    return request('/v1/model-metadata', {
        method: 'POST',
    });
}

