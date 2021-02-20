import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

export function getAll() {
    return sendRequest(BASE_URL);
}