import sendRequest from './send-request';

const BASE_URL = '/api/trainers';

export function getClients() {
    return sendRequest(BASE_URL);
}