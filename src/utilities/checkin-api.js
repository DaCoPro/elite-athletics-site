import sendRequest from './send-request';

const BASE_URL = '/api/checkins';

export function getAll() {
    return sendRequest(BASE_URL);
}