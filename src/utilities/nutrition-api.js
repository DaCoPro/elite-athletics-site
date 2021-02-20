import sendRequest from './send-request';

const BASE_URL = '/api/nutrition';

export function getAll() {
    return sendRequest(BASE_URL);
}